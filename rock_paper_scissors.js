const input = require('readline-sync')
let name = input.question('Enter your name ------')
console.log()
console.log(`*********** Welcome ${name} to the Rock Paper scissors Game ******************`)
console.log()
let computerMoves = ['rock', 'paper', 'scissors']
console.log()
function main(){
    let computerChoice = computerMoves[Math.floor(Math.random()*computerMoves.length)];
    console.log(computerChoice)
    let userChoice = input.question('Enter your choice. rock, paper , scissors ----')
    if(computerChoice ==userChoice ){
        console.log(`Game drow! because you chosen ${userChoice}, and computer also chosen ${computerChoice}`)
    }else if(computerChoice == 'paper'){
        if(userChoice == 'rock'){
            console.log(`Computer won! because you chosen ${userChoice}, and computer chosen ${computerChoice}`)
        }else{
            console.log(`${name} won! because computer chosen ${computerChoice}, and you chosen ${userChoice}`)
        }
    }else if(computerChoice == 'scissors') {
        if(userChoice == 'rock') {
            console.log(`${name} won! because computer chosen ${computerChoice}, and you chosen ${userChoice}`)
        }else{
            console.log(`Computer won! because you chosen ${userChoice}, and computer chosen ${computerChoice}`)

        }
    }else if(computerChoice == 'rock') {
        if(userChoice == 'paper') {
            console.log(`${name} won! because computer chosen ${computerChoice}, and you chosen ${userChoice}`)
        }else{
            console.log(`Computer won! because you chosen ${userChoice}, and computer chosen ${computerChoice}`)

        }
    }else{
        console.log('invalid input')
    }
    console.log()
    let user = input.question('do you want to play again? press yes, otherwise no ----')
    if(user == 'yes'){
        console.log()
        main()
    }else{
        console.log('Thank you for visit!')
    }

};
main()