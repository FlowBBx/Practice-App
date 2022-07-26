let state = [];

function insert(event) {
  let input = document.getElementById("note");
  let theValue = input.value;

  if (event.key === "Enter" && input !== ``) {
    if (input.value.length < 20) {
      state.push({
        target: theValue,
        setup: false,
      });
      draw();
    } else {
      alert ("Te rugam sa introduci un cuvant mai scurt < 20 litere")
    }
    
  }
}

function draw() {
  let element = document.getElementById("elements");
  
  element.innerHTML = ``;

    for (let [i, p] of Object.entries(state)) {
      if (state[i].setup === true) {
        element.innerHTML += `
              <div id="check">
                  <input id="checked" type="checkbox"  onclick="checkeds(${i})" checked>
                  <div id="input" class="checked">${p.target}</div>                     
              </div>
                      `;
      } else {
        element.innerHTML += `
              <div id="check">
                  <input id="checked" type="checkbox" onclick="checkeds(${i})" >
                  <div id="input">${p.target}</div>                     
              </div>
                      `;
      }
      document.querySelector("#note").value = "";
    }
}

function checkeds(i) {
  let values = document.querySelectorAll("#checked");
  let checkbox = [];
  let input = document.querySelectorAll("#input");
  for (let val of values) {
    checkbox.push(val);
  }

  if (checkbox[i].checked) {
    state[i].setup = true;
    input[i].classList.add("checked");
  } else {
    state[i].setup = false;
    input[i].classList.remove("checked");
  }
}


