const readline = require('node:readline'); //allows terminal input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Roll Dice?(Y/N)`, input => {
    let input_case =input.toUpperCase(); //covert input uppercase
    console.log('You have chosen:' + `${input_case}`) // informs user what they have picked


    if (input_case == 'Y'){ // if the input matches y for yes
       player_move =  Math.ceil(Math.random() * 6) //choses a number between 0 and 1, rounds up for a number between 1 and 6
       console.log(player_move); // shows the user the random outcome generated from dice
      
       computer_move =  Math.ceil(Math.random() * 6)
       console.log(`Computer played: ${computer_move}`);

      if(computer_move>player_move){
          console.log('Computer wins, better luck next time!')
      }else if (computer_move==player_move){
          console.log('DRAW');
      }else{
          console.log('YOU WIN!')
      }


    } else if(input_case == 'N'){ //ends the game
        console.log('Have a nice day!')

    }else { //when input is not yes or no
        console.log('Error, try again!')
    }

  rl.close();
});