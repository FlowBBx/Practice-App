let state = [null, null, null, null, null, null, null, null, null];
let turn = 1;
let finished = false;
function play(idx) {
  
  if (finished === true || !state.includes(null)) {
    win();
  } else {
    let test = [];
    let my = document.querySelectorAll("div");
    for (let val of my) {
      test.push(val);
    }

    if (state[idx] === null) {
      if (turn === 1) {
        state[idx] = true;
        my[idx].innerHTML = `<img style="width:300px;,height:300px;" src="0.svg">`;
        turn = 2;
      } else if (turn === 2) {
        state[idx] = false;
        my[idx].innerHTML = `<img style="width:300px;,height:300px;" src="X.svg">`;
        turn = 1;
      }


      if (state[0] === state[1] && state[1] === state[2] && state[0] !== null) {
        finished = true;
        playerWin()
      } else if (state[3] === state[4] && state[4] === state[5] && state[3] !== null){
        finished = true;
        playerWin()
      } else if (state[6] === state[7] && state[7] === state[8] && state[6] !== null){
        finished = true;
        playerWin()
      }else if (state[0] === state[3] && state[3] === state[6] && state[0] !== null){
        finished = true;
        playerWin()
      }else if (state[1] === state[4] && state[4] === state[7] && state[1] !== null){
        finished = true;
        playerWin()
      }else if (state[2] === state[5] && state[5] === state[8] && state[2] !== null){
        finished = true;
        playerWin()
      }else if (state[0] === state[4] && state[4] === state[8] && state[0] !== null){
        finished = true;
        playerWin()
      }else if (state[2] === state[4] && state[4] === state[6] && state[2] !== null){
        finished = true;
        playerWin()
      }
    }
    if (turn === 1 && finished === false) {
      document.getElementById("header").innerText = `Move 0`
    } else if (state.every( value => value !== null)) {
      document.getElementById("header").innerText = `New game`
    } else if (turn === 2 && finished === false) {
      document.getElementById("header").innerText = `Move X`
    }
  }
}

function win() {
  finished = false;
  let my = document.querySelectorAll("div");
  for (let i = 0; i < my.length; i++) {
    my[i].innerHTML = ``;
  }
  document.getElementById("header").innerText = `New game`
  state = [null, null, null, null, null, null, null, null, null];
}

function playerWin() {
  if (turn === 1 && finished === true) {
    document.getElementById("header").innerText = `X has won`
  } else if (turn === 2 && finished === true) {
    document.getElementById("header").innerText = `0 has won`
  }
}
