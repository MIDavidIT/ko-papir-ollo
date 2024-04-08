let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const restart_div = document.getElementById("restart");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertChoice(letter) {
    if (letter === "r") return "Kő";
    if (letter === "p") return "Papír";
    if (letter === "s") return "Olló";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertChoice(userChoice) + " nyer " + convertChoice(computerChoice) + " ellen. Győztél!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertChoice(userChoice) + " veszít " + convertChoice(computerChoice) + " ellen. Vesztettél!";
}

function draw() {
    result_p.innerHTML = "Döntetlen, senki sem nyert!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice); 
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function restart() {
    userScore_span.innerHTML = "0";
    computerScore_span.innerHTML = "0";
    result_p.innerHTML = "Kezdheted a játékot!"
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })

    restart_div.addEventListener('click', function() {
        restart();
    })
}

main();