let userpro =''
let userselection = userpro
let comchoice = getComputerChoice()
let computerscore = 0
let userscore = 0

function user() {
    userprompt = prompt('Do you choose Rock, Paper or Scissors?')
    userpro = userprompt
    return userpro;
}
function getComputerChoice () {
    let ComputerOption = Math.random();
    if (ComputerOption <= 0.34) {
        return 'rock';
    } else if (ComputerOption <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
game()
function game() {
    let i = 0
    while (i <= 5) {
        user()
        PlayRound();
        alert(`Your score is ${userscore} and the computer score is ${computerscore}`)
        i++
        if (i = 5) {
            alert('End of the game')
        }

    }
}
function PlayRound() {
    let comoption = getComputerChoice();
    userselection = userpro.toLowerCase()
    if (userselection === comoption) {
        alert("It's a tie!")
    } else if (userselection === 'scissors' & comoption === 'paper' || userselection === 'rock' & comoption === 'scissors' || userselection === 'paper' & comoption === 'rock') {
        alert(`You win! ${userselection} beats ${comoption}.`)
        return userscore++
    } else {
        alert(`Ỳou lose! ${comchoice} beats ${userselection}.`)
        return computerscore++
    }

}
