let playerResult = 0;
let resultComp = 0;

const optionList = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const playerResultParas = document.querySelector("#user-score");
const resultCompPara = document.querySelector("#comp-score");

const generateChoiceAI = () => {
  const optionList = ["Rock", "Paper", "Scissors"];
  const randNum = Math.floor(Math.random() * 3);
  return optionList[randNum];
};

const gameWasDraw = () => {
  message.innerText = "Game was Draw. Play again.";
  message.style.backgroundColor = "#082b32";
};

const tellWinner = (winnerUser, usersChoice, computersChoice) => {
  if (winnerUser) {
    playerResult++;
    playerResultParas.innerText = playerResult;
    message.innerText = `winner! Your ${usersChoice} Knock ${computersChoice}`;
    message.style.backgroundColor = "#00FF00";
  } else {
    resultComp++;
    resultCompPara.innerText = resultComp;
    message.innerText = `lost :( ${computersChoice} Knock your ${usersChoice}`;
    message.style.backgroundColor = "#FF0000";
  }
};

const playGame = (usersChoice) => {
  //Generate computer choice
  const computersChoice = generateChoiceAI();

  if (usersChoice === computersChoice) {
    //Draw Game
    gameWasDraw();
  } else {
    let winnerUser = true;
    if (usersChoice === "rock") {
      //scissors, paper
      winnerUser = computersChoice === "paper" ? false : true;
    } else if (usersChoice === "paper") {
      //rock, scissors
      winnerUser = computersChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      winnerUser = computersChoice === "rock" ? false : true;
    }
    tellWinner(winnerUser, usersChoice, computersChoice);
  }
};

optionList.forEach((choice) => {
  choice.addEventListener("click", () => {
    const usersChoice = choice.getAttribute("id");
    playGame(usersChoice);
  });
});
