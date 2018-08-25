export default class Post{
    constructor(data){
        this.description = data.description
        this._id = data._id
        this.imgUrl = data.ImgUrl
        this.userId = data.userId
    }

    get listTemplate(){
        return `
        <div class="row">
            <div class="col-4"><p></p></div>
            <div class="col-1"><button onclick="app.controllers.post.editPosts('${this._id}')">Edit</button></div>
            <div class="col-1"><button onclick="app.controllers.post.removePosts('${this._id}')">Delete</button></div>
            <div class="col-12"><img src="${this.imgUrl}"/></div>
            <div class="col-12"><h5>${this.description}</h5></div>
            <div class="col-4"><button onclick="app.controllers.posts.setActive(${this._id})">View Comments</button></div>
            <div class="col-4"><button onclick="">COMMENT</button></div>
            <div class="col-2"><button onclick="">YAY</button><button onclick="">NAY</button></div>
        </div>`
    }
    get detailTemplate(){
        return `
        <div class="row">
            <div class="col-4"><p>${this.userId.username}</p></div>
            <div class="col-1"><button onclick="app.controllers.post.editPosts('${this._id}')">Edit</button></div>
            <div class="col-1"><button onclick="app.controllers.post.removePosts('${this._id}')">Delete</button></div>
            <div class="col-12"><img src="${this.imgUrl}"/></div>
            <div class="col-12"><h5>${this.description}</h5></div>
            <div class="col-4"><button onclick="">COMMENT</button></div>
            <div class="col-2"><button onclick="">YAY</button><button onclick="">NAY</button></div>
        </div>
        <div id="comment"></div>`
    }
}