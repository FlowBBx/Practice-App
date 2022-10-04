let state = [];
let thegame = 0;
let value = Math.floor(Math.random() * 5);
let validator = true;
let price = 11;

let help_1 = false;
let help_2 = false;
let help_3 = false;

async function getData() {
  let link =
    "https://milionare-game-default-rtdb.europe-west1.firebasedatabase.app/.json";
  let database = await fetch(link);
  let response = await database.json();
  state = response;
  console.log(state);
  draw();
}

function draw(i) {
  if (thegame === 15) {
    if (
      confirm(
        "FELICITARI, AI CASTIGAT PREMIUL CEL MARE 10000000000000000 LEI... VREI SA MAI INCERCI ODATA ?"
      ) === true
    ) {
      location.reload();
    }
  }
  console.log(thegame);
  i = value;
  console.log(i);
  document.getElementById("draw").innerHTML = `
        
        <div>
            <h4>${state[thegame][i].quest}</h4>
        </div>
        <div class="container">
            <div class="row">
                <div id="1" class="a col" onclick="answer(1)">${state[thegame][i].a}</div>
                <div id="2" class="a col" onclick="answer(2)">${state[thegame][i].b}</div>
                <div class="w-100"></div>
                <div id="3" class="a col" onclick="answer(3)">${state[thegame][i].c}</div>
                <div id="4" class="a col" onclick="answer(4)">${state[thegame][i].d}</div>
            </div>
        </div>
        
    `;
  validator = true;
  document.querySelector(".statistics").style.display = "none";
}

function answer(k) {
  if (validator === true) {
    if (k === Number(state[thegame][value].id)) {
      document.querySelector(`[id='${k}']`).classList.add("green");
      document.querySelector(`[id='${k}']`).classList.add("anim");
      thegame++;
      validator = false;
      reward();
      timeOut();
      return;
    } else {
      document.getElementById(`${k}`).classList.add("red");
      document.querySelector(`[id='${k}']`).classList.add("anim2");
      let val = document.querySelectorAll(".a");
      for (let j = 0; j < 4; j++) {
        if (val[j].id !== state[thegame][value].id) {
          val[j].classList.add("red");
        } else if (val[j].id === state[thegame][value].id) {
          val[j].classList.add("green");
        }
      }
      lost();
    }
  }
}

function lost() {
  setTimeout(() => {
    if (confirm("Ai pierdut!!! Vrei sa mai incerci odata ?") === true) {
      location.reload();
    } else
      document.querySelector(
        "body"
      ).innerHTML = `<h1 style="display:flex; justify-content:center;">Bye!!! :(</h1>`;
  }, 3000);
}

function timeOut() {
  setTimeout(draw, 2000);
}

function reward() {
  document.getElementById(price).classList.add("reward");
  price++;
}

function help(i) {
  let arr = [];
  let action_help_1 = 0;
  let test = document.querySelectorAll(".col");
  for (let i = 0; i < test.length; i++) {
    arr.push(test[i].id);
  }

  if (i === 1) {
    if (help_1 === false) {
      help_1 = true;
      document.querySelector("#help1").style.backgroundColor = "red";
      alert(
        `Salutare, Hmm pai ma gandesc ca cea mai buna varianta este ${state[thegame][value].id}, insa nu sunt 100% sigur, poti incerca!`
      );
    }
  } else if (i === 2) {
    if (help_2 === false) {
      help_2 = true;
      document.querySelector(".statistics").style.display = "flex";
      document.querySelector("#help2").style.backgroundColor = "red";
      console.log(arr);
      for (let v = 0; v < arr.length; v++) {
        if (state[thegame][value].id === arr[v]) {
          document.querySelector(`[class='${v + 1}']`).innerHTML = `55%`;
        } else if (state[thegame][value].id !== arr[v]) {
          document.querySelector(`[class='${v + 1}']`).innerHTML = `15%`;
        }
      }
    }
  } else if (i === 3) {
    if (help_3 === false) {
      help_3 = true;
      document.querySelector("#help3").style.backgroundColor = "red";

      for (let j = 0; j < arr.length; j++) {
        if (state[thegame][value].id !== arr[j]) {
          if (action_help_1 < 2) {
            document.querySelector(`[id='${j + 1}']`).style.display = "none";
            action_help_1++;
          }
        }
      }
    }
  }
}

//  I have to finish the json
// hover on on variantes
