import Store from "../../store/store";

let store = new Store()

export default class PostsController{
    constructor(){
    }

    setActive(id){
        store.getActivePost(draw, id)
    }

}