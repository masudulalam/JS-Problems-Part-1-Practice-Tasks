/**
 * 
 * 
 * Task-3:
 * Write a function to count the number of vowels in a string.
 * 
 * 
 */


// Solution:
function countVowels (string) {
    string = string.toUpperCase();
    
    let count = 0;
    for (const char of string) {
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count += 1;
        }
    }
    return count;
}

const toStart = 'In the name of Allah, the Entirely Merciful, the Especially Merciful.';

const output = countVowels(toStart);
console.log(output, 'Vowels in this string.');