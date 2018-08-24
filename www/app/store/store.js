import User from "../models/user.js";
import Post from "../models/post.js";
import Comment from "../models/comment.js";


let store

const storeApi = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000
});

//SINGLE SOURCE OF TRUTH
let state = {
  user: {},
  activePost:{},
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
      .then(res => res.json())
      .then(data => {
        setState('posts', data.map(post => new Post(post)))
        draw()
      })
  }
  getComments(draw){
    storeApi.get('/api/post/' + state.user._id)
    .then(res => res.json())
    .then(data=>{
      setState('comment', data.map(comment => new Comment(comment)))
      draw()
    })
  }
  login(creds, draw) {
    storeApi.post('/auth/login', {
        method: 'post',
        body: JSON.stringify(creds),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(res => res.json())
      .then(data => {
        setState('user', new User(data))
        draw()
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