export default class Comment{
    constructor(data){
        this.description = data.description
        this._id = data._id
        this.imgUrl = data.ImgUrl
        this.postId = data.postId
        this.userId = data.userId
    }
    get listTemplate(){
        return `
        <div class="col-1"><button onclick="">X</button></div>
        <div class="col-6"><img src="${this.imgUrl}"/></div>
        <div class="col-6"><h5>${this.description}</h5></div>
        <div class="col-2"><button onclick="">YAY</button><button onclick="">NAY</button></div>
        `
    }
}