import Store from "../../store/store.js";

let store = new Store()

let elem = document.getElementById('app')

// function draw() {
//   elem.innerHTML =
//     `
//   <div>
//     <h1>${store.state.user.username}</h1>
//   </div>
//   <div class="row">
//             <div class="col-4"><p></p></div>
//             <div class="col-1"><button onclick="app.controllers.post.editPosts('${store.state.post._id}')">Edit</button></div>
//             <div class="col-1"><button onclick="app.controllers.post.removePosts('${store.state.post._id}')">Delete</button></div>
//             <div class="col-12"><img src="${store.state.post.imgUrl}"/></div>
//             <div class="col-12"><h5>${store.state.post.description}</h5></div>
//             <div class="col-4"><button onclick="app.controllers.comments.drawComment('${store.state.post._id}')">View Comments</button></div>
//             <div class="col-4"><button onclick="app.controllers.comment.postcomments(${store.state.post._id})">COMMENT</button></div>
//             <div class="col-2"><button onclick="">YAY</button><button onclick="">NAY</button></div>
//         </div>
//   `

// }

export default class UserController {
  constructor() {

  }

  login(e, callback) {
    e.preventDefault();
    let creds = {
      username: e.target.username.value,
      pin: e.target.pin.value
    }
    store.login(creds, callback)

  }


}