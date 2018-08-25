import UserController from "./components/user/user-controller.js";
import CommentController from "./components/comment/comment-controller.js";
import PostsController from "./components/post/posts-controller.js";



class App {
    constructor() {
      this.controllers = {
        user: new UserController(),
        posts: new PostsController(),
        comment: new CommentController()
      }
    }
  }
  
  window.app = new App()