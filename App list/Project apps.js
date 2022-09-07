let state = [];
let difficulty = {
  1: "Very easy",
  2: "Easy",
  3: "Medium",
  4: "Hard",
  5: "Very Hard",
};

async function getData() {
  let theLink =
    "https://app-list-4ee60-default-rtdb.europe-west1.firebasedatabase.app/.json";
  let database = await fetch(theLink);
  let response = await database.json();
  state = response;
  console.log(state);
  testTheState();
}

function testTheState() {
  for (let [i, p] of Object.entries(state)) {
    document.querySelector("tbody").innerHTML += `
            <td style="width: 20%;">${state[i].App}</td>
            <td style="width: 10%;">${difficulty[state[i].Difficulty]}</td>
            <td style="max-width: 300px;">${state[i].ConceptApp}</td>
            <td style="width: 20%;">${state[i].Description}</td>
            <td style="width: auto;"><a href="${
              state[i].link
            }" target="_blank">See app</a></td>
    `;
  }
}

function formOfLogin(that) {
  document.getElementById("tableOfDatabase").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function log(that, event) {
  event.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value === "admin" && password.value === "admin123") {
    window.open("Admin.html", "_self");
  } else {
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
  }
}
