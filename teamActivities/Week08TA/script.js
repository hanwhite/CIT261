showPeople();

function getPeople(url) {
    return fetch(url)
    .then(function(response){
        return response.json();
    })
}

function showPeople(url = 'https://swapi.co/api/people/') {
    
    getPeople(url).then(function(data){
        console.log(data);
        const people = data.results;
    
    
        const list = document.getElementById("peopleList");
        let peopleList = document.getElementById("peopleList");
        for(p of people) {
            let item = document.createElement('div');
            item.classList.add("container");
            peopleList.appendChild(item);
            item.innerHTML = `
            <h2 class="nameHeader">${p.name}</h2>
            <p class="birthYear">${p.birth_year}</p>
            `;
        }
    
        const nextButton = document.getElementById("nextButton");
        const prevButton = document.getElementById("prevButton");
    
        nextButton.onclick = () => {
            showPeople(data.next);
        }
        
        if(!prevButton) {
            prevButton.disabled = true;
        }
        prevButton.onclick = () => {
            showPeople(data.prev);   
        }
        
        
        
    })
}



/*


*/
