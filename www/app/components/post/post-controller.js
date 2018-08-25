import Store from "../../store/store.js";

let store = new Store()

function draw(){
    document.getElementById('app').innerHTML = store.state.activePost.detailTemplate
}

export default class PostsController{
    constructor(){
    }

    setActive(id){
        store.getActivePost(draw, id)
    }

}