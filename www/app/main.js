import UserController from "./components/user/user-controller.js";



class App {
    constructor() {
      this.controllers = {
        user: new UserController(),
        // post: new PostController,
        // comment: new CommentController
      }
    }
  }
  
  window.app = new App()