/**
 * 
 * Task-2:
    You are given an array of numbers. Count how many times the a number is repeated in the array.

    sample-input: numbers = [5,6,11,12,98, 5]

    find: 5

    output: 2


    sample-input:

    numbers = [5,6,11,12,98, 5]

    find: 25

    output: 0
 */


// Solution:
function countRepeatNumber(array) {
    let count = 0;
    for (let item of numbers) {
        if (item === 25) {
            count += 1;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const numbers2 = [5, 6, 11, 12, 98, 5];

const output = countRepeatNumber(numbers2);
console.log(output);