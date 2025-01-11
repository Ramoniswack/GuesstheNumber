

document.addEventListener("DOMContentLoaded", () =>
{

const themeBtn = document.getElementById("themebtn");
const submitbtn = document.getElementById("submitbtn");
const inputField = document.getElementById("myInput");
const messageDiv = document.getElementById("message");
let currentMode = "light";

let body = document.querySelector("body");

const correctNumber = 10;
let attempts = 0;
const maxAttempts = 5;


themeBtn.addEventListener("click", () =>
{
    if( currentMode == "light")
    {
        currentMode= "dark";
        console.log(currentMode);
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currentMode= "light";
        console.log(currentMode);
        body.classList.add("light");
        body.classList.remove("dark");

    }

});

submitbtn.addEventListener("click", () =>
{

    const userGuess = parseInt(inputField.value, 10);
    attempts++;
    if(isNaN(userGuess))
    {
        // alert("Invalid input, please enter a number");
        messageDiv.textContent = "Invalid ";
    }
   else if(userGuess == correctNumber)
    {
        // alert("Congratulations, you've won");
        messageDiv.textContent= "Congratulations, you've won";
    }
    else 
    {
        if(attempts<4)
        {
            // alert("Ops! Wrong guess, Enter again");
            messageDiv.textContent = "Ops! Wrong guess, Enter again";
        }
        else
        {
            messageDiv.textContent = ("Sorry, you've used all your attempts. The correct number was" +  correctNumber);
            // alert("Sorry, you've used all your attempts. The correct number was" + correctNumber);
        }
    }
    inputField.value ="";
});



});