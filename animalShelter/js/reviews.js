const reviewList = [
    {
        content: "'Loved our experience!' The staff was amazing and SO helpful.'",
    },
    {
        content: "'The only place I'm ever adopting from again!",
    }, 
    {
        content: "'Loved our new pup!'",
    }, 
    {
        content: "'So happy we used Rescue Pet!'",
    },
    {
        content: "'Loved the environment. 100% reccomend to all my friends!'",
    }, 
    {
        content: "'Great customer service!'",
    }, 
];

export default class Reviews {
    constructor(elementId) {
        this.parent = document.getElementById(elementId);
        this.addReviewItem = this.addReview();
        this.type = elementId;
    }
    
    getAllReviews() {
        return reviewList;
    }
    
    readLS(type) {
        return JSON.parse(window.localStorage.getItem(type));
    }
    
    writeLS(type, input) {
        window.localStorage.setItem(type, JSON.stringify(input));
    }
    
    showList() {
        const listElement = document.getElementById("reviewListElement");
        listElement.innerHMTL = "";
        this.renderList(reviewList, listElement);
    }
    
     renderList(reviews, parent) {
        reviews.forEach(review => {
        parent.appendChild(showOneReview(review));
        });
    }  
    
    addReview() {
        const listElement = document.getElementById("reviewListElement");
       const form = document.getElementById("addReviewForm");
       form.addEventListener('submit', event => {
            event.preventDefault();
            const input = document.getElementById("addReview");
            const content = input.value;
            this.renderReview(content);
       });
    }
    
    renderReview(content) {
        const reviewI = {
            content: content,
        };
        reviewList.push(reviewI);
        
        const listElement = document.getElementById("reviewListElement");
        const item = document.createElement('li');
        listElement.appendChild(item);
        item.innerHTML = ` <div id="reviewItem">
                <p>${reviewI.content}</p>
            </div> `
        this.writeLS(reviewI);
        return item;
    }
    
}

function showOneReview(review) {
        const item = document.createElement('li');
        item.innerHTML = ` <div id="reviewItem">
                <p>${review.content}</p>
            </div> `

        return item;
}
    
