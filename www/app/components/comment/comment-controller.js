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
    drawComments(postId){
        let comments = store.state.posts[postId].comments
        let template = ''
        comments.forEach(comment=>{
            template += comment.listTemplate
        })
        document.getElementById('comments-'+postId).innerHTML = template + 'COMMENTS!! MARK RULES!!'
    }
    removeComment(){

    }
    editComment(){

    }
    createComment(){
        
    }
}
