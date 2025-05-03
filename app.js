import { stdin } from 'process';
import path from 'path'
import colors from 'colors'
import { add, substract, multiply, divide } from './my_module/calculator.js';


console.log(colors.green('Current file:' + path.basename(import.meta.url)));

console.log(colors.grey('Which arithmetic do you want to perform? \n Please enter one: ' + colors.green('add, substract, multiply, or divide')));

stdin.once('data', (arithmetic) => {
    const operator = String(arithmetic);
    const op = operator.trim().toLowerCase()

    console.log(colors.grey("Enter the first number: "));

    stdin.once('data', (firstInput) => {
        const firstNumber = parseInt(String(firstInput));
        
        console.log(colors.grey("Enter the second number: "));

        stdin.once('data', (secondInput) => {
            const secondNumber = parseInt(String(secondInput));
            

            if(op === "add") {
                console.log(colors.red('Answer: ' + add(firstNumber, secondNumber)));
            } else if (op === "substract") {
                console.log(colors.blue('Answer: ' + substract(firstNumber, secondNumber)));
            } else if (op === "multiply") {
                console.log(colors.green('Answer: ' + multiply(firstNumber, secondNumber)));
            } else if (op === "divide") {
                console.log(colors.yellow('Answer: ' + divide(firstNumber, secondNumber)));
            } else {
                console.log("Error!, Ensure you choose the right arithmetic and enter numbers only where required.");
            }
            process.exit()
        });
    });  
})
