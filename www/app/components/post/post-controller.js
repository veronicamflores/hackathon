import Store from "../../store/store.js";

let store = new Store()

function draw(){
    template = ""
    store.state.activeState.forEach(post => template += post.DetailTemplate)
    document.getElementById('app').innerHTML = template
}

export default class PostsController{
    constructor(){
    }

    setActive(id){
        store.getActivePost(draw, id)
    }

}