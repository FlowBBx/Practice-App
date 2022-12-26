validation = 1;
let database = [];
let bool = false;

async function getData() {
  let data = await fetch(
    "https://app-list-4ee60-default-rtdb.europe-west1.firebasedatabase.app/.json"
  );
  let response = await data.json();
  database = response;
  console.log(database);
  draw();
}

function draw() {
  document.getElementById("table").innerHTML = ``;
  for (let [i, p] of Object.entries(database)) {
    document.getElementById("table").innerHTML += `
        <div class="titles">
            <h2>${database[i].App}</h2>
            <button type="button" class="del" onclick="del('${i}')">Delete</button>
        </div>
    `;
  }
}

async function addElement() {
  let appName = document.getElementById("appName").value;
  let difficulty = document.getElementById("difficulty").value;
  let concepts = document.querySelectorAll("#concepts");
  let allConcepts = [];
  let redInputs = document.querySelectorAll("input");
  let theError = [];
  for (let val of redInputs) {
    theError.push(val);
  }
  for (let val of concepts) {
    allConcepts.push(val.value);
  }
  let description = document.querySelector("#description").value;
  let link = document.getElementById("link").value;

  if (
    appName === "" ||
    allConcepts === [] ||
    description === "" ||
    link === ""
  ) {
    validation = 0;
    for (let i = 0; i < theError.length; i++) {
      theError[i].classList.add("border");
    }
  } else {
    validation = 1;
    for (let i = 0; i < theError.length; i++) {
      theError[i].classList.remove("border");
    }
  }

  if (validation === 1) {
    let database = await fetch(
      "https://app-list-4ee60-default-rtdb.europe-west1.firebasedatabase.app/.json",
      {
        method: "POST",
        body: JSON.stringify({
          App: appName,
          ConceptApp: allConcepts,
          Description: description,
          Difficulty: difficulty,
          link: link,
        }),
      }
    );
    document.querySelector("form").reset();
    document.querySelector("#theLab").innerHTML = `
        Concepts Applied:
            <input type="text" id="concepts">
            <button type="button" id="addInput" onclick="inputs()">+</button>
        `;
  }
  getData();
}

function inputs() {
  document
    .getElementById("concepts")
    .insertAdjacentHTML("afterend", `<input type="text" id="concepts">`);
}

function imag() {
  document
    .getElementById("images")
    .insertAdjacentHTML("afterend", `<input type="text" id="images">`);
}
// document.querySelector("#addInput").addEventListener("click", ()=> {
//     document.getElementById("concepts").insertAdjacentHTML("afterend",`<input type="text" id="concepts">`)
// })   why is not working (Teach) ???

document.querySelector("h1").addEventListener("click", () => {
  if (confirm("You will logout, are u sure ?")) {
    window.location.href = "Project Apps.html";
  }
});

function showProjects() {
  if (bool === false) {
    bool = true;
    document.querySelector("main").classList.add("hidden");
    document.getElementById("table").classList.remove("hidden");
    document.getElementById("s").textContent = "Show form";
  } else if (bool === true) {
    bool = false;
    document.getElementById("table").classList.add("hidden");
    document.querySelector("main").classList.remove("hidden");
    document.getElementById("s").textContent = "Show Table";
  }
}

async function del(i) {
  if (confirm(`Are u ure you want do delete project: ${database[i].App}`)) {
    let response = await fetch(
      `https://app-list-4ee60-default-rtdb.europe-west1.firebasedatabase.app/${i}/.json`,
      {
        method: "DELETE",
      }
    );
  }
  getData();
}
