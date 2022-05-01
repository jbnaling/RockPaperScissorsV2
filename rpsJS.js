/*
program the buttons 

-get highlight them when hovering
-get values
*/



//add on hover element
// document.getElementById("rock").addEventListener("mouseover", function () {document.getElementById("rock").style.border = "thick solid #0000FF"})
// document.getElementById("paper").addEventListener("mouseover", function () {document.getElementById("paper").style.border = "thick solid #0000FF"})
// document.getElementById("scissors").addEventListener("mouseover", function () {document.getElementById("scissors").style.border = "thick solid #0000FF"})
// document.getElementById("rock").addEventListener("mouseout", function () {document.getElementById("rock").style.border = "none"})
// document.getElementById("paper").addEventListener("mouseout", function () {document.getElementById("paper").style.border = "none"})
// document.getElementById("scissors").addEventListener("mouseout", function () {document.getElementById("scissors").style.border = "none"})

/*
how do i create this with a class and an array?
*/

const gameButtonsCollection = document.getElementsByClassName("gameButton");

//put this as event listener
/*
adds border and gets id when clicked
*/



for (let i=0; i<gameButtonsCollection.length; i++){
    
    gameButtonsCollection[i].addEventListener("mouseover", function(){
        gameButtonsCollection[i].style.border="thick solid red";
    })
    gameButtonsCollection[i].addEventListener("mouseout", function(){
        gameButtonsCollection[i].style.border="none";
    })



    gameButtonsCollection[i].addEventListener("click", function(){
        let buttonVal = null; 
        if (gameButtonsCollection[i] );
    })
}