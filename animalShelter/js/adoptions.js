 const dogList = [
    {
        name: "Scooter",
        breed: "Blue Heeler",
        age: "4",
        trained: "is",
        kids: "is",
        dogs: "is NOT",
        image: "../images/Scooter.jpg",
    },
    {
        name: "Jensen",
        breed: "German Shepherd",
        age: "3",
        trained: "is",
        kids: "is NOT",
        dogs: "is ",
        image: "../images/Jensen.jpg",
    }, 
    {
        name: "Toby",
        breed: "Dachshund",
        age: "8",
        trained: "is",
        kids: "is",
        dogs: "is",
        image: "../images/Toby.jpg",
    }, 
    {
        name: "Mr. Snuggles",
        breed: "Labrador Retriever",
        age: "2",
        trained: "is NOT",
        kids: "is",
        dogs: "is",
        image: "../images/mrSnuggles.jpg",
    },
];

export default class Dogs {
    constructor(elementId) {
        this.parent = document.getElementById(elementId);
        this.type = elementId;
    }
    
    getAllDogs() {
        return dogList;
    }
    
    readLS(type) {
        return JSON.parse(window.localStorage.getItem(type));
    }
    
    writeLS(type, input) {
        window.localStorage.setItem(type, JSON.stringify(input));
    }
    
    showList() {
        const listElement = document.getElementById("dogListElement");
        listElement.innerHMTL = "";
        this.renderList(dogList, listElement);
    }
    
     renderList(dogs, parent) {
        dogs.forEach(dog => {
        parent.appendChild(showOneDog(dog));
        });
    }  
    
}

function showOneDog(dog) {
        const item = document.createElement('li');
        item.innerHTML = 
          ` <div id="dogItem">
            <image class="dimage" src="${dog.image}"<image>
            <div class="dinfo">
                <h2>${dog.name}</h2>
                <h3>${dog.breed}</h3>
                <li>He is ${dog.age} years old.<li>
                <li>He ${dog.trained} potty trained.<li>
                <li>He ${dog.kids} good with kids.<li>
                <li>He ${dog.dogs} good with dogs.<li>
            </div> 
            </div>`

        return item;
}
    
