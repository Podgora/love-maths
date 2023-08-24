document.addEventListener("DOMContentLoaded" , function(){
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons){
        button.addEventListener("click", function (){
            if (this.getAttribute("data-type") === "submit"){
                alert ("You clicked Submit!");
            }else{
                let gameType = this.getAttribute ("data-type");
                alert ("You clicked ${game-type}");
            }
        })
    }
})

function runGame (){
    let num1 = math.floor(Math.random() * 25) + 1;
}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAditionQwestion () {

}

function displaySubtractQwestion () {

}

function displayMultiplyQwestion () {

}
