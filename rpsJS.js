/*
event listener for game buttons
- border for selecting via keydown
    - lasts for .5 seconds and then goes away
*/

const gameButtonsCollection = document.getElementsByClassName("gameButton");

function addBorder(e){
    if (e.keyCode == "82"){
        gameButtonsCollection[0].classList.add("animate");
    }
    if (e.keyCode == 80) {
        gameButtonsCollection[1].classList.add("animate");
      }
    if (e.keyCode == 83) {
        gameButtonsCollection[2].classList.add("animate");
    }
};

function removeBorder(){
    gameButtonsCollection[0].classList.remove("animate");
    gameButtonsCollection[1].classList.remove("animate");
    gameButtonsCollection[2].classList.remove("animate");
};
/*
selects user play based on keyboard selection or mouse click
*/

function selectUser(e){

    if (modalRestart.style.visibility == "visible"){
        return;
    }

    if (e.keyCode !="82" &&
        e.keyCode !="80" &&
        e.keyCode !="83" &&
        e.target.id != "rock" &&
        e.target.id != "paper" &&
        e.target.id != "scissors" 
        ){
        console.log("invalid keypress")
        return;
        }

    if (e.target){
        userSelect = e.target.id;
    }

    if (e.keyCode == "82"){
        userSelect = "rock";
    }
    if (e.keyCode == 80) {
        userSelect = "paper";      
      }
    if (e.keyCode == 83) {
        userSelect = "scissors";
    }
    
    playCPU();

}

window.addEventListener("keydown", addBorder);
window.addEventListener("keydown", selectUser);
document.addEventListener("transitionend", removeBorder);

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", selectUser);
paper.addEventListener("click", selectUser);
scissors    .addEventListener("click", selectUser);


function playCPU() {
    //random number 0-2
    
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum==0){
        cpuSelect = "rock";
    }
    if (randomNum==1){
        cpuSelect = "paper";
    }
    if (randomNum==2){        
        cpuSelect = "scissors";
    }
    console.log("user has played " + userSelect);
    console.log("cpu has played " + cpuSelect);
    playGame();
}

function findWinner(){

    if (userSelect=="rock"){
        if (cpuSelect =="rock"){       
            console.log("Tie Game")
            return "Tie game!"
        }
        if (cpuSelect =="paper"){
            console.log("You lose")
            return `You Lose! ${cpuSelect} beats ${userSelect}`
           
        }
        else {
            console.log("You Win")
            return `You Win! ${userSelect} beats ${cpuSelect}`
        }
    }

    if (userSelect=="paper"){
        if (cpuSelect =="rock"){
            return `You Win! ${userSelect} beats ${cpuSelect}`
        }
        if (cpuSelect =="paper"){
            return "Tie game!"
        }
        else {
            return `You Lose! ${cpuSelect} beats ${userSelect}`
        }
    }

    if (userSelect=="scissors"){
        if (cpuSelect =="rock"){
            return `You Lose! ${cpuSelect} beats ${userSelect}`
        }
        if (cpuSelect =="paper"){
            return `You Win! ${userSelect} beats ${cpuSelect}`
        }
        else {
            return "Tie game!"
        }
    }
}

/* 
Plays a round of rock paper scissors between user and cpu selections
*/
let won = document.getElementById("won");

function displayRound(){
    won.innerText = roundWinner;
}

/*
declare variables and play game
*/

let userSelect="";
let cpuSelect= "";
let roundWinner="";
let userWin = 0;
let cpuWin = 0;

function playGame(){ 
    roundWinner = findWinner();
    displayRound();
    updateScore();
    displayScore();
}



function displayScore() {
    console.log(`You have won ${userWin} games and the CPU has won ${cpuWin} games`)
    UserScore.innerText = `User: ${userWin}`;
    CPUScore.innerText = `CPU: ${cpuWin}`;

    if (userWin == 5 ||
        cpuWin ==5){
        
        restartGame();
    }
}
/*
modal visible/invisible 
*/
let modalRestart = document.querySelector(".restart");
let close = document.querySelector(".close");
close.addEventListener("click", closeRestartScreen);
modalRestart.addEventListener("click", closeRestartScreen);


function restartGame(){
    showRestartScreen();
}

function resetScores() {
    userWin = 0;
    cpuWin = 0;
    displayScore();
}

function showRestartScreen(){
    if (window.getComputedStyle(document.querySelector('.restart')).visibility == "hidden"){
      modalRestart.style.visibility = "visible";
      let modalText = document.getElementById("modal-text")
      modalText.style.fontSize = "30px"

      if (userWin =="5") {
        modalText.textContent = `You Won the match!`;
        }
      else {
        modalText.textContent = `You Lost the match!`;
        }
    }    


}

function closeRestartScreen(){    
        modalRestart.style.visibility = "hidden";
        resetScores();
        won.textContent = "";
}
let score = document.getElementById("score");

function toggleScoreVisibility() {
    score.style.visibility = "hidden";
}


/*
update score:
finds the rounds winner and add's to the win totals for cpu or user
*/

function updateScore() {
    switch (roundWinner.slice(4,5)) {
        case "L":
            cpuWin++;
            break;
        case "W":
            userWin++;
            break;
        default:
            break;
    }

}




