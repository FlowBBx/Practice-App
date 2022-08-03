let state = [];
let imageData = [];
let sort = null;

async function getImage() {
    let database = await fetch("https://jsonplaceholder.typicode.com/photos");
    let response = await database.json();
    imageData = response
}

async function getData() {
    let database = await fetch("https://jsonplaceholder.typicode.com/users");
    let dataImage = await fetch("https://jsonplaceholder.typicode.com/photos");
    let response = await database.json();
    let responseImage = await dataImage.json();
    state = response;
    imageData = responseImage;
    draw();
}

function draw() {
    let list = document.querySelector("#user")
    console.log(imageData);
    console.log(state);
    for (let i=0; i < state.length; i++) {

        list.innerHTML += 
            `
            <div class="user">
                <div class ="image"><img src='${imageData[state[i].id-1].thumbnailUrl}'></div>
                <div class ="name">${state[i].name}</div>
                <div class ="address">
                    City: ${state[i].address.city} <br>
                    Street: ${state[i].address.street} <br>
                    Suite: ${state[i].address.suite}
                </div>
                <div class ="company">
                    Company:${state[i].company.name} <br>
                    BS: ${state[i].company.bs}
                </div>
                <div class ="details">
                    Phone: ${state[i].phone} <br>
                    Username: ${state[i].username} <br>
                    E-mail: ${state[i].email} 
                </div>
                <div class ="webpage"> 
                    <button type="button" onclick="visitPage(${i})">${state[i].website}</button>
                </div>
            </div>
            `
    } 
}

function visitPage(i) {
    window.location.assign(`http://${state[i].website}`) 
}

function sortList (idx, name) {
    if (idx === 1) {
        state.sort( (a,b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });

    } else if (idx === 2) {
        state.sort((a,b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            } else {
                return 0;
            }
        })
    }
    document.querySelector("#user").innerHTML = ``;
    draw();
}



// sa nu uit sa-l fac responsive 
//trebuie sa fac o varianta mai simplista la sortare... 

  