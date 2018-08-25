import Store from "../../store/store.js";


let store = new Store
function draw(){
    let template =""
    let posts = store.state.posts
    for(let postId in posts){
        template += posts[postId].listTemplate
    }
    document.getElementById('app').innerHTML = template
}

export default class PostsController{
    constructor(){
        this.getPosts()
    }
        getPosts(){
            store.getPosts(draw)
        }
        toggleHidden(){
            let toggle = document.getElementById('create-post')
            if(toggle.style.visibility === 'hidden'){
                toggle.style.visibility = 'visible'
            }
            else{
                toggle.style.visibility = 'hidden'
            }
        }
        createPost(event){
            event.preventDefault()
            let creds = {
                description: event.target.description.value,
                imgUrl: event.target.imgUrl.value,
                userId: event.target.userId.value
            }
            store.createPost(creds, this.getPosts)
        }
        editPosts(event, postId){
            event.preventDefault()
            let creds = {
                description: event.target.description.value,
                imgUrl: event.target.imgUrl.value,
                userId: event.target.userId.value
            }
            store.editPosts(postId, this.getPosts, creds)
        }

        removePosts(postId){
            store.removePosts(postId, this.getPosts)
        }
}
