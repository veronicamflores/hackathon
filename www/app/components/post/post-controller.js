import Store from '../../store/store.js'

let store = new Store
function draw(){
    let template =""
    store.state.post.forEach(post => template += post.listTemplate)
    document.getElementById('app').innerHTML = template
}

export default class PostController{

}
