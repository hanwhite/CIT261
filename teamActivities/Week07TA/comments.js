const commentList = [
    
];

class CommentModel {
    constructor(type) {
        this.type = type;
        this.comments = this.readLS(this.type) || [];

    }
    
    getAllComments() {
        return this.comments;
    }
    
    readLS(type) {
        return JSON.parse(window.localStorage.getItem(type));
    }
    
    writeLS(type, input) {
        window.localStorage.setItem(type, JSON.stringify(input));
    }
    
    
    addComment(comment, hikeName) {
        
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
        };
        commentList.push(newComment);
        this.writeLS(newComment);
        console.log("addcomment working", newComment);
        
        
        
    }
    
}



export default class Comments {
    constructor(type, elementId) {
        this.type = type;
        this.commentModel = new CommentModel(this.type);
        this.elementId = elementId;
    }
    
    showCommentsList() {
        console.log("showCommentsList() is working");
        
        const commentElement = document.getElementById("commentElement");
        commentElement.innerHMTL = "";
        this.renderCommentList(commentElement);
        this.submitButtonListener();
    }
    
    renderCommentList(parent) {
            let item = document.createElement('li');
            item.innerHTML = ` 
            <div id="newComment">
                <h2>Add Comment</h2>
                <input type="text" id="commentInput"/>
                <button id="submitComment">Submit</button>
            </div> 
            <h2>Comments</h2>
            <ul class="comments">hannah</ul>
            `
            parent.appendChild(item);
    }


    submitButtonListener() {
        const sButton = document.getElementById("submitComment");
        const input = document.getElementById("commentInput").value;
        const hikeName = this.hikeName;
        sButton.addEventListener('click', event => {
            this.commentModel.addComment(input, hikeName) 
        });
    }

    
}


function showOneComment(comment) {
    const item = document.createElement()
}











