function getPeople(userUrl = undefined) {
    let proxy = `https://cors-anywhere.herokuapp.com/`;
    let url = (userUrl ? `${proxy}${userUrl}` : `${proxy}https://swapi.co/api/people`);

    fetch(url)
        .then(async (result) => {
            let people = await result.json();
            people = people;

            console.log(people);

            let peopleList = document.getElementById("peopleList");
            let div = document.getElementById("peopleList");
            people.results.forEach(person => {
                let item = document.createElement("li");
                item.innerHTML = `Name: ${person.name}<br>Hair Color: ${person.hair_color}`;
                peopleList.appendChild(item);

            });

            let buttonPrevious = document.createElement("button");
            buttonPrevious.innerHTML = '← previous';
            if (!people.previous) {
                buttonPrevious.disabled = true;
            }
            div.appendChild(buttonPrevious)
            buttonPrevious.onclick = () => {
                getPeople(people.previous)
            };

            let buttonNext = document.createElement("button");
            buttonNext.innerHTML = 'next →';
            if (!people.next) {
                buttonNext.disabled = true;
            }
            div.appendChild(buttonNext)
            buttonNext.onclick = () => {
                getPeople(people.next)
            };
        });
}

getPeople();