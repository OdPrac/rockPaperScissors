const bttns = document.querySelectorAll("button");
let a = 0;
let b = 0;
let i = 0;

bttns.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    playRound(bttn);
  });
});

const choices = ["Scissors", "Rock", "Paper"];

const playRound = (bttn) => {
  console.log(bttn.innerText);
  let pChoice = bttn.innerText;
  pChoice = choices.indexOf(pChoice);

  gameOn(pChoice);
};

const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");

const gameOn = (pChoice) => {
  let pcChoice = Math.floor(Math.random() * 3);
  i++;
  console.log(choices[pChoice], choices[pcChoice]);
  if (pChoice === pcChoice) {
    span1.innerText = a;
    span2.innerText = b;
  } else if (pChoice - pcChoice === 1 || pChoice - pcChoice === -2) {
    a++;
    span1.innerText = a;
    span2.innerText = b;
  } else {
    b++;
    span1.innerText = a;
    span2.innerText = b;
  }
  if (i === 5 && a - b > 0) {
    i = 0;
    a = 0;
    b = 0;
    alert("You Win!");
  }
  if (i === 5 && a - b < 0) {
    i = 0;
    a = 0;
    b = 0;
    alert("You Lose!");
  }
  if (i === 5 && a === b) {
    i = 0;
    a = 0;
    b = 0;
    alert("Draw!");
  }
};
