#! usr/bin/env node
import inquirer from "inquirer";

let RandomNumber = (Math.floor(Math.random()*10+1))
const GuessedNumber = await inquirer.prompt(
    [
        {
            message: "Guess the number between 1-10",
            type: "number",
            name: "numbergame",


        }
    ]
)
if (GuessedNumber.numbergame === RandomNumber)
{
  console.log("Congratulations! you guessed the right number")  
}else{
    console.log("You guessed the wrong number")
}