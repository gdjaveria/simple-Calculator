#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber"},
    {message: "Enter second number", type: "number", name: "secondNumber"},
    {message: "Select one of the opreator to perform action",
     type: "list", 
     name: "operator",
     choices: ["Addittion","Subtraction","Multiplication","Division",]
},
]);
// Conditional statment.

   if (answer.operator ==="Addittion"){
    console.log(answer.firstNumber + answer.secondNumber);
}  else if (answer.operator ==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}  else if (answer.operator ==="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}  else if (answer.operator ==="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
    } else {
   console.log("please select a right operator !!")
}  



   
    
