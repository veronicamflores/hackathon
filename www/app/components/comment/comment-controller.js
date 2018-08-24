import Store from '../../store/store.js'

let store = new Store
function draw(){
    let template =""
    store.state.comment.forEach(comment => template += comment.listTemplate)
    document.getElementById('app').innerHTML = template
}

export default class CommentController{
    constructor(){

    }
    getComments(){
        store.getComments(draw)
    }
}
