const readline = require('node:readline'); //allows terminal input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Roll Dice?(Y/N)`, input => {
    let input_case =input.toLowerCase(); //covert input lowercase
    console.log('You have chosen:' + `${input_case}`) // informs user what they have picked

    if (input_case == 'y'){ // if the input matches y for yes
       result =  Math.ceil(Math.random() * 6) //choses a number between 0 and 1, rounds up for a number between 1 and 6
        console.log(result); // shows the user the random outcome generated from dice
    } else if(input_case == 'n'){
        console.log('Have a nice day!')
    }else { //when input is not yes or no
        console.log('Error, try again!')
    }

  rl.close();
});