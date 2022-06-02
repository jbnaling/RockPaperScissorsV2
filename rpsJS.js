const gameButtonsCollection = document.getElementsByClassName("gameButton");

/*
event listener for game buttons
- border for selecting via keydown
    - lasts for .5 seconds and then goes away
*/

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
    if (e.keyCode !="82" &&
        e.keyCode !="80" &&
        e.keyCode !="83"){
        console.log("invalid keypress")
        return;
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

    console.log(userSelect);
    playCPU();

}

window.addEventListener("keydown", addBorder);
window.addEventListener("keydown", selectUser);
document.addEventListener("transitionend", removeBorder);




/* 
Function playCPU
randomly selects rock, paper, or scissors
*/

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
    playRound();
}


/* 
Plays a round of rock paper scissors between user and cpu selections
*/
// function playRound(userPlay, cpuPlay){
function playRound(){ 

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




// function playGame(){

//     for(let i=1; i<=5; i++){
//         userSelect = playUser();
//         cpuSelect = playCPU();

//         roundWinner = playRound(userSelect, cpuSelect)
//         console.log(roundWinner);
//         updateScore();
//         displayScore();
//     }

// }


/*
declare variables and play game
*/

let userSelect="";
let cpuSelect= "";
// let roundWinner="";
// let userWin = 0;
// let cpuWin = 0;

// playGame();

