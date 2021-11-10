const BASE_URL = "http://localhost:3000/characters";

document.addEventListener("DOMContentLoaded", getAnimalNameInfo);

document.addEventListener("submit", e => voteCounter(e))

function getAnimalNameInfo() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(animals => animals.forEach(renderName))
}

function getAnimalImage() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(animals => renderAnimalInfo(animals))
}

function renderName(a) {
    let animalName = document.createElement("span");
    animalName.id = `${a["id"]}`
    animalName.textContent = `${a["name"]}`;
    let charBar = document.querySelector("#character-bar");
    charBar.append(animalName)
}



// Shit I couldn't make work
// function renderMain(a) {
//     let oldName = document.querySelector("#name")
//     oldName.innerHTML = `${a["name"]} <br/>`

//     let image = document.querySelector("#image")
//     image.src = `${a["image"]}`

//     let votes = document.querySelector("h4")
//     votes.innerText = `Total Votes: ${a["votes"]}`
// }

// function voteCounter(e) {
//     e.preventDefault();
// }
