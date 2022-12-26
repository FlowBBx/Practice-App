let database = {};
let difficulty = {
    "1":"Very Easy",
    "2":"Easy",
    "3":"Medium",
    "4":"Hard",
    "5":"Very Hard"
};

async function getData() {
    let link = "https://app-list-4ee60-default-rtdb.europe-west1.firebasedatabase.app/.json";
    let storage = await fetch(link);
    let response = await storage.json();
    database = response;
    draw(); 
}

function draw() {
    let draw = document.querySelector("#card")
    for(let [i, p] of Object.entries(database)) {
        draw.innerHTML += 
        `
        <div class="col ajust-col">
            <div class="card card-ajust" style="width: 21rem;">
            <div id="${database[i].id}" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${database[i].img[0]}" class="d-block w-100 image-ajust"  alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${database[i].img[1]}" class="d-block w-100 image-ajust" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${database[i].img[2]}" class="d-block w-100 image-ajust" alt="...">
                </div>
              </div>
            <a class="carousel-control-prev" href="#${database[i].id}" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#${database[i].id}" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
                <div class="card-body">
                    <h5 class="card-title card-title-ajust">${database[i].App}</h5>
                    <h6 class="card-title card-difficulty-ajust">${difficulty[database[i].Difficulty ]}</h6>
                    <p class="card-text card-text-ajust">${database[i].Description}</p>
                    <p id="concepts" class="card-text concept-text-ajust"></p>
                    <a href="#" class="btn btn-primary">Try link</a>
                </div>
            </div>
        </div>  
    `   
    let letarrOfConcepts = []
    for(let j = 0; j<database[i].ConceptApp.length; j++) {
        let a = document.querySelectorAll("#concepts")
         for (let val of a) {
            letarrOfConcepts.push(val);
         } 

    letarrOfConcepts[i].innerHTML += `${database[i].ConceptApp[j]}, `
    }
    }
}

function search(elem) {
    let draw = document.querySelector("#card");
    draw.innerHTML = "";
    for (let [i,p] of Object.entries(test)){
        if(p && p.title.toLowerCase().includes(elem.value.toLowerCase())){
          draw.innerHTML += `
          <div class="col ajust-col">
            <div class="card card-ajust" style="width: 18rem;">
                <img src="${p.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">${p.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div> 
          `  
        }
    }
}


function hide() {
  document.querySelector("#login-container").classList.remove("hidden")
  document.querySelector("#login-container").classList.add("login")
  document.querySelector(".container").classList.add("hidden")
  document.querySelector(".navbar-container").classList.add("hidden")
  document.querySelector(".navbar-container").classList.remove("navbar-container")
}

async function match() { 
    let username = document.querySelector("#input1").value
    let password = document.querySelector("#input2").value

    let dataLogin = await fetch("https://login-e6bdd-default-rtdb.europe-west1.firebasedatabase.app/.json")
    let loginResponse = await dataLogin.json()
    console.log(loginResponse)

    if (username === loginResponse.Username && password === loginResponse.Password) {
      window.open("Admin.html", "_self")
    } else {
      document.querySelector("#input1").classList.add("red")
      document.querySelector("#input2").classList.add("red")
    }
 }

 function redRemove (a){
    a.classList.remove("red")

 }
