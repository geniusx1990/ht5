/* Task 5: Array Performance Analysis

1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments. 
The `measureArrayPerformance` function should execute the provided function with the given array as input and measure the execution time.

2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods (`map`, `filter`, `reduce`, etc.) a
gainst your custom array manipulation functions. */

function measureArrayPerformance(fn, array) {
    const start = performance.now();
    fn(array);
    const end = performance.now();
    const result = end - start;
    return result;

}

function myFunction(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }
return result

}

function mapElements(arr) {
    return arr.map((x) => x * 2);
}

function reduceElements(arr) {
    return arr.reduce((acc, x) => acc + x);
}

function filterElements(arr) {
    return arr.filter((x) => x > 2);
}




const arr = [1, 2, 3, 4, 5];
console.log(measureArrayPerformance(myFunction, arr))

console.log(measureArrayPerformance(mapElements, arr))
console.log(measureArrayPerformance(reduceElements, arr))
console.log(measureArrayPerformance(filterElements, arr))
