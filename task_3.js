/* Task 3: Array Shuffling

1. Create a function called `customShuffle` that takes an array as an argument and returns a new array with its elements randomly shuffled.

2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8]


function customShuffle(array) {
    let result = new Array(array.length);
    i = 0;
    while (result.includes(undefined)) {
        let j = getRandomInt(array.length)
        if (result[j] === undefined) {
            result[j] = array[i];
            i++
        }
    }
    return result;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(customShuffle(arr));


/* 2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.
 */

function customShuffleBest(array) {
    for (let i = 1; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}



console.log(customShuffleBest(arr))
