var startButton = document.querySelector(".buttonStart");
var startMenu = document.querySelector(".container");
var timer = document.querySelector(".time")
var secondsLeft = 75
var questionNum = 0
var mike = document.querySelector(".mike");
var winCheck = ""
var loser = document.querySelector(".loser");
var score = 0
var scoreCounter = document.querySelector(".score");
var formHS = document.querySelector(".hsForm")
var submitHS = document.querySelector(".submitHS");
var view = document.querySelector(".view");
var clear = document.querySelector(".clear")
var init = document.querySelector(".fname")
// variables for questions
var answerButton = document.querySelectorAll(".answer");
// var answerButtonOne = document.querySelector(".answerOne");
// var answerButtonTwo = document.querySelector(".answerTwo");
// var answerButtonThree = document.querySelector(".answerThree");
// var answerButtonFour = document.querySelector(".answerFour");
var questionList = document.querySelectorAll(".question")

// function to hide start stuff and start first question
function unhideQuestion(){
    questionList[questionNum].classList.remove("hidden");
    startMenu.classList.add("hidden");
};

// function to start timer
// function lowerTimer(){
//     secondsLeft--
//     timer.textContent = secondsLeft
//     if(secondsLeft === 0){
//         timer.classList.add("hidden");
//         winCheck = false;
//         clearInterval(intervalTimer);
//     }
// }
function startTimer(){
    timer.textContent = secondsLeft;
    var intervalTimer = setInterval(function(){
        if (secondsLeft > 1){
            secondsLeft--
            timer.textContent = secondsLeft
        } else {
            loseGame();
        }}
    , 1000);
}


// 



// function for answering questions
function answerCheck(event){
    var answerClicked = event.target
    if (answerClicked.classList.contains("last")){
        if (answerClicked.classList.contains("rightAnswer")){
            score += secondsLeft;
        }
        endGame();
    } else {
        // endGame();
        // console.log("hi")
        if (answerClicked.classList.contains("wrongAnswer")){
            secondsLeft -= 5
            questionList[questionNum].classList.add("hidden");
            questionNum++;
            questionList[questionNum].classList.remove("hidden");
        } else {
            questionList[questionNum].classList.add("hidden");
            questionNum++;
            questionList[questionNum].classList.remove("hidden");
            score += secondsLeft
        }
    } 
    
}




for (i of answerButton){
    i.addEventListener("click", answerCheck)
}

// function for losing
function loseGame(){
    loser.classList.remove("hidden");
    timer.classList.add("hidden");
    winCheck = false;
    clearInterval.intervalTimer
    mike.classList.remove("hidden");
    questionList[questionNum].classList.add("hidden");
}

function endGame(){
    questionList[questionNum].classList.add("hidden");
    scoreCounter.textContent = "score is " +score;
    timer.classList.add("hidden");
    winCheck = false;
    clearInterval.intervalTimer
    mike.classList.remove("hidden");
    formHS.classList.remove("hidden");
    view.classList.remove("hidden");
    clear.classList.remove("hidden")
}

function submitHSSave(event){
    event.preventDefault()
    var highscore = localStorage.getItem("Highscore")
    if (!highscore){
        localStorage.setItem("Highscore", score)
        localStorage.setItem("Initials", fname.value)
    } else if (score > highscore){
        localStorage.setItem("Highscore", score)
        localStorage.setItem("Initials", fname.value)
    } else {
        alert("your score was not high enough doofus")
    }
    

}




// event Listeners
startButton.addEventListener("click", unhideQuestion);
startButton.addEventListener("click", startTimer);
submitHS.addEventListener("click", submitHSSave);
view.addEventListener("click", function(){
    var highscore = localStorage.getItem("Highscore")
    if (!highscore){
        alert("there is no previous high score")
        return
    }
    alert("Previous HS was " + highscore + " which was scored by: " + localStorage.getItem("Initials"))
})
clear.addEventListener("click", function(){
    localStorage.removeItem("Highscore")
})