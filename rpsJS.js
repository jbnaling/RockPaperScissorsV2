/*
program the buttons 

-get highlight them when hovering
-get values
*/

/*
how do i create this with a class and an array?
*/

const gameButtonsCollection = document.getElementsByClassName("gameButton");

/*
event listener for game buttons
- border on mouse-over
*/

for (let i=0; i<gameButtonsCollection.length; i++){
    
    gameButtonsCollection[i].addEventListener("mouseover", function(){
        gameButtonsCollection[i].style.border="thick solid red";
    })
    gameButtonsCollection[i].addEventListener("mouseout", function(){
        gameButtonsCollection[i].style.border="none";
    })
}

/*
event listener for game buttons
-click and get value of image
*/

/* 
Function playCPU
randomly selects rock, paper, or scissors
*/

function playCPU() {
    //random number 0-2
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum==0){
        return "rock";
    }
    if (randomNum==1){
        return "paper";
    }
    if (randomNum==2){        
        return "scissors";
    }
}

/* 
Plays a round of rock paper scissors between user and cpu selections
*/
function playRound(userPlay, cpuPlay){
    if (userPlay=="rock"){
        if (cpuPlay =="rock"){           
            return "Tie game!"
        }
        if (cpuPlay =="paper"){
            return `You Lose! ${cpuPlay} beats ${userPlay}`
        }
        else {
            return `You Win! ${userPlay} beats ${cpuPlay}`
        }
    }

    if (userPlay=="paper"){
        if (cpuPlay =="rock"){
            return `You Win! ${userPlay} beats ${cpuPlay}`
        }
        if (cpuPlay =="paper"){
            return "Tie game!"
        }
        else {
            return `You Lose! ${cpuPlay} beats ${userPlay}`
        }
    }

    if (userPlay=="scissors"){
        if (cpuPlay =="rock"){
            return `You Lose! ${cpuPlay} beats ${userPlay}`
        }
        if (cpuPlay =="paper"){
            return `You Win! ${userPlay} beats ${cpuPlay}`
        }
        else {
            return "Tie game!"
        }
    }
}

/*
function playUser: 
prompt user to select rock paper or scissors
*/

function playUser(){
    userSelect = prompt("Rock Paper or Scissors");
    return userSelect.toLowerCase();
}

/*
displayscore function
purpose: display the user and cpu score
*/
function displayScore() {
    console.log(`You have won ${userWin} games and the CPU has won ${cpuWin} games`)
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

/*
function game
purpose: 
-plays 5 rounds of rock paper scissors between user and cpu
*/

function playGame(){

    for(let i=1; i<=5; i++){
        userSelect = playUser();
        cpuSelect = playCPU();

        roundWinner = playRound(userSelect, cpuSelect)
        console.log(roundWinner);
        updateScore();
        displayScore();
    }

}


/*
declare variables and play game
*/

let userSelect="";
let cpuSelect= "";
let roundWinner="";
let userWin = 0;
let cpuWin = 0;

playGame();

