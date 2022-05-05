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
Your game is going to play against the computer, so begin with a function called computerPlay 
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

function computerPlay() {
    //random number 0-2

    /* delete this!!! for testing only*/
    return "scissors";

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
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/
function singleRound(userPlay, cpuPlay){
    if (userPlay=="rock"){
        if (cpuPlay =="rock"){           
            return "Tie game!"
        }
        if (cpuPlay =="paper"){
            return "Cpu Wins!"
        }
        else {
            return "Player Wins!"
        }
    }

    if (userPlay=="paper"){
        if (cpuPlay =="rock"){
            return "Player Wins!"
        }
        if (cpuPlay =="paper"){
            return "Tie game!"
        }
        else {
            return "Cpu Wins!"
        }
    }

    if (userPlay=="scissors"){
        if (cpuPlay =="rock"){
            return "Cpu Wins!"
        }
        if (cpuPlay =="paper"){
            return "Player Wins!"
        }
        else {
            return "Tie game!"
        }
    }
}

/*
write userPlay as a function
purpose: prompt user to select rock paper scissor
return: userSelecString as lowercase
*/

function userPlay(){
    /***delete me - for testing only */
    userSelect = "rock";
    //userSelect = prompt("Rock Paper or Scissors");
    return userSelect.toLowerCase();
}



/*
declare variables
*/

let userSelect="";
let cpuSelect= "";
let roundWinner="";
let userWin = 0;
let cpuWin = 0;

userSelect = userPlay();
cpuSelect = computerPlay();

roundWinner = singleRound(userSelect, cpuSelect)
console.log(roundWinner);


switch (roundWinner) {
    case "Player Wins!":
        userWin++;
        break;
    case "Cpu Wins":
        cpuWin++;
        break;
    default:
        break;
}

