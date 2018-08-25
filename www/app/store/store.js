import User from "../models/user.js";
import Post from "../models/post.js";
import Comment from "../models/comment.js";


let store

const storeApi = axios.create({
  baseURL: '//localhost:3000',
  timeout: 3000
});

//SINGLE SOURCE OF TRUTH
let state = {
  user: {},
  activePost: {},
  post: {},
  comment: {},
}

function setState(prop, data) {
  state[prop] = data
  console.log(state)
}

export default class Store {
  getPosts(draw) {
    storeApi.get('/api/posts/')
      .then(data => {
        setState('posts', data.data.map(post => new Post(post)))
        draw()
      })
  }
  getActivePost(draw, id) {
    storeApi.get('/api/posts/' + id)
      .then(data => {
        console.log(data)
        setState('activePost', new Post(data.data))
        draw()
      })
  }

  editPosts(postId, getPosts) {
    storeApi.put('/api/posts/' + postId)
      .then(res => {
        getPosts()
      })
  }

  removePosts(postId, getPosts) {
    storeApi.delete('/api/posts/' + postId)
      .then(res => {
        getPosts()

      })
  }

  getComments(draw) {
    storeApi.get('/api/comments/' + state.user._id)
      .then(data => {
        setState('comment', data.data.map(comment => new Comment(comment)))
        draw()
      })
  }

  postComment(postId, getComments) {
    storeApi.post('/api/comments/' + postId)
      .then(data => {
        setState('comment', data.data.map(comment => new Comment(comment)))
        getComments()
      })
  }



  login(creds, draw) {
    storeApi.post('/auth/login', creds)
      .then(data => {
        setState('user', new User(data))
        draw(this.getPosts)
      })
      .catch(console.error)
  }
  //SINGLETON
  constructor() {
    if (store) {
      return store
    }
    store = this
  }
  get state() {
    return {
      ...state
    }
  }

}