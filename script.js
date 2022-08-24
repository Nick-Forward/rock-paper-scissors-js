// Adding Comments here to map out logical progression of function
//Author: Nick Forward. Date: Aug 21 2022
//Step 1: Build function to generate computer input for a game
let computerscore = 0;
let playerscore = 0;
function Computerinput() {
let choices = ['rock', 'paper', 'scissors'];
let computeroutcome = choices[Math.floor(Math.random()*choices.length)];
return computeroutcome;
}
//Step 2: Build function to get input from player
function Playerinput () {
    let input = window.prompt("Rock, Paper, or Scissors?");
    let playeroutcome = input.toLowerCase();
    return playeroutcome;
}
//Step 3: Build function to run game
function compare (Player, Computer) {
    if (Player == Computer) {
        let result = 'tie game';
        return result;
    } else if (Player == 'rock'){
        if (Computer == 'paper'){
            let result = 'Computer wins';
            return result;
        }
        else {
            let result = 'Player wins';
            return result;
        }
    }
    else if (Player == 'paper') {
        if (Computer == 'scissors'){
            let result = 'Computer wins';
            return result;
        }
        else {
            let result = 'Player wins';
            return result;
        }
    }
    else if (Player == 'scissors') {
        if (Computer == 'rock'){
            let result = 'Computer wins';
            return result;
        }
        else {
            let result = 'Player wins';
            return result;
        }
    }
    else {
        let result = 'invalid input';
        return result;
    }
}

function rungame(){
    let input = window.prompt("Rock, Paper, or Scissors?");
    let playeroutcome = input.toLowerCase();
    let computeroutcome = Computerinput();
    return compare(playeroutcome, computeroutcome);
}
console.log(rungame());
//Step 4: Build function to run game if player chooses rock
//Step 5: Build function to run game if player chooses scissors
//Step 6: Build function to run game if player chooses paper
//Step 7: Output result to player
//Step 8: Build function for best of 5
