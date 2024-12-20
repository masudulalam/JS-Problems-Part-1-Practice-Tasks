/**
 * 
 * 
 * Task-4:
    Write a function to find the longest word in a given string.

    sample-input: I am learning Programming to become a programmer

    sample-output: Programming


 */


// Solution:
function findLongestWord (string) {
    const words = string.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const str = 'I am learning Programming to become a programmer';

const output = findLongestWord(str);
console.log(output);
