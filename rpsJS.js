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
write userPlay as a function
purpose: prompt user to select rock paper scissor
return: userSelecString as lowercase
*/

function userPlay(){
    
    
    userSelect = prompt("Rock Paper or Scissors");
    return userSelect.toLowerCase();
}

/*
displayscore function
purpose: display the user and cpu score
arguments: none
return: none
*/
function displayScore() {
    console.log(`You have won ${userWin} games and the CPU has won ${cpuWin} games`)
}


/*
function game
purpose: 
-play 5 rounds singleRound 
-displays winner/loser
arguments:
returns:
*/

function game(){

    for(let i=1; i<=5; i++){
        userSelect = userPlay();
        cpuSelect = computerPlay();

        roundWinner = playRound(userSelect, cpuSelect)
        console.log(roundWinner);

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
        displayScore();
    }

}


/*
declare variables
*/

let userSelect="";
let cpuSelect= "";
let roundWinner="";
let userWin = 0;
let cpuWin = 0;

game();

