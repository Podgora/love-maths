document.addEventListener("DOMContentLoaded" , function(){
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons){
        button.addEventListener("click", function (){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute ("data-type");
                runGame(gameType);
            }
        })
    }

    runGame ("addition"); 

})

function runGame (gameType){
    let num1 = math.floor(Math.random() * 25) + 1;
    let num2 = math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAditionQwestion (num1 , num2);
    } else {
        alert ("Unknown game type $ {gameType}");
        throw "Unknown game type ${gameType}. Aborting!";
    } 
}

function checkAnswer () {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer ();
    let isCorrect = userAnswer === calculatedAnswer [0];

    if (isCorrect) {
        alert ("hey! You got it right! :D");
    } else {
        alert ("Awwww..... You answerd ${userAnswer}. The correct answer was ${calculatedAnswer[0]!}");
    }

    runGame (calculatedAnswer[1]);

}

function calculateCorrectAnswer () {
    let operand1 = parseInt(getElementById("operand1").innerText);
    let operand2 = parseInt(getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition" ];
    } else {
        alert("Unimplemented operator ${operator}");
        throw "Unimplemented operator ${operator}. Aborting!";
    } 

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAditionQwestion (operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQwestion () {

}

function displayMultiplyQwestion () {

}
