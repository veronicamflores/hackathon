export default class Comment{
    constructor(data){
        this.description = data.description
        this._id = data._id
        this.imgUrl = data.ImgUrl
        this.postId = data.postId
        this.userId = data.userId
    }
}