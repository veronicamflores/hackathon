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
  posts: {},
}

function setState(prop, data) {
  state[prop] = data
  console.log(state)
}

export default class Store {
  getPosts(draw) {
    storeApi.get('/api/posts/')
      .then(data => {
        let posts = data.data.map(post => new Post(post))
        state.posts = {}
        posts.forEach(post=>{
          state.posts[post._id] = post
        })
        this.getComments(draw)
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
  createPost(creds, getPosts){
    storeApi.post('api/posts/', creds)
    .then(res =>{
      console.log(res.data)
      getPosts(res.data)
    })

  }
  editPosts(postId, getPosts, creds) {
    storeApi.put('/api/posts/' + postId, creds)
      .then(res => {
        getPosts()
      })
  }

  removePosts(postId, callback) {
    storeApi.delete('/api/posts/' + postId)
      .then(res => {
        callback()

      })
  }

  getComments(draw) {
    storeApi.get('/api/comments/')
      .then(data => {
        let comments = data.data.map(comment => new Comment(comment))
        comments.forEach(comment=>{
          if(state.posts[comment.postId]){
            state.posts[comment.postId].comments.push(comment)
          }
        })
        draw()
      })
  }

  createComment(creds, postId, draw){
    storeApi.post('api/comments/', creds)
    .then(res =>{
      draw()
    })
  }
  deleteComment(commentId, draw){
    storeApi.delete('api/comments/' + commentId)
    .then(res=>{
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



  login(creds, callback) {
    storeApi.post('/auth/login', creds)
      .then(data => {
        setState('user', new User(data))
        callback()
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