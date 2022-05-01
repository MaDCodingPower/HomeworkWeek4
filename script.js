var startButton = document.querySelector(".buttonStart");
var startMenu = document.querySelector(".container");
var timer = document.querySelector(".time")
var secondsLeft = 75
var questionNum = 0
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
function lowerTimer(){
    secondsLeft--
    timer.textContent = secondsLeft
    if(secondsLeft === 0){
        timer.textContent = "";
        clearInterval(intervalTimer);
    }
}

function startTimer(){
    timer.textContent = secondsLeft;
    var intervalTimer = setInterval(function(){
        if (secondsLeft > 1){
            secondsLeft--
            timer.textContent = secondsLeft
        } else {
            timer.textContent = ""
            clearInterval.intervalTimer
        }}
    , 1000);
}



// function for answering questions
function answerCheck(event){
    var answerClicked = event.target
    if (answerClicked.classList.contains("wrongAnswer")){
        console.log("hi")
    } else {
        questionList[questionNum].classList.add("hidden");
        questionNum++;
        if (questionNum < questionList.length){
            questionList[questionNum].classList.remove("hidden");
            
        } else{
            endgame();
        }
    }
}

// event Listeners
startButton.addEventListener("click", unhideQuestion);
startButton.addEventListener("click", startTimer);


for (i of answerButton){
    i.addEventListener("click", answerCheck)
}

// answerButtonOne.addEventListener("click", answerCheck);
// answerButtonTwo.addEventListener("click", answerCheck);
// answerButtonThree.addEventListener("click", answerCheck);
// answerButtonFour.addEventListener("click", answerCheck);

