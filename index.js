const nameInput = document.querySelector("input");
const startBtn = document.querySelector(".start_btn");
const register = document.querySelector(".register_window");
const playerName = document.querySelector(".game_player-name");
const time = document.getElementById("time");
const game = document.querySelector(".game_window");
const numEl0 = document.getElementById("num1");
const numEl1 = document.getElementById("num2");
const round = document.querySelector(".game_number");

let intervalID;
let timesRound;
let nums = [];

if (localStorage.getItem("userName") === "") {
  alert("Please fill form");
  nameInput.style.display = "block";
  localStorage.setItem("userName", nameInput.value);
  playerName.textContent = localStorage.getItem("userName");
  console.log(localStorage.getItem("userName"));
} else {
  playerName.textContent = localStorage.getItem("userName");
  nameInput.remove();
  register.classList.remove("hide");
  game.classList.add("hide");
}

startBtn.addEventListener("click", () => {
  register.classList.add("hide");
  game.classList.remove("hide");

  timesRound = setInterval(roundes, 10000);
  intervalID = setInterval(timer, 1000);
});

let second = 10;
let roundNum = 1;
const timer = () => {
  second--;
  console.log(`second: ${second}`);

  if (second <= 0) {
    clearInterval(intervalID);
    second = 10;
  }

  if (roundNum >= 10) {
    second = 0;
    clearInterval(intervalID);
  }

  time.innerHTML = `${second < 10 ? "0" + second : second}`;
};

const roundes = () => {
  roundNum++;
  console.log(`roundNum: ${roundNum}`);

  if (roundNum >= 10) {
    clearInterval(timesRound);
  }

  round.innerHTML = `${roundNum < 10 ? "0" + roundNum : roundNum}`;

  intervalID = setInterval(timer, 1000);

  let num = randomNums();

  numEl0.textContent = num;
  numEl1.textContent = num + 5;
};

const randomNums = () => {
  const num = Math.floor(Math.random() * 10);
  nums.push(num);

  console.log(num);

  return num + 1;
};
console.log(nums);
