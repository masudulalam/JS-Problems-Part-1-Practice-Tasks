/**
 * 
 * 
 * Task-1:
 * Write a function to convert temperature from Celsius to Fahrenheit.
 * 
 * 
 */



// Solution:
function celsiusToFahrenheit (celsius) {
    const fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

const output = celsiusToFahrenheit(24);
console.log(output, 'Fahrenheit');
