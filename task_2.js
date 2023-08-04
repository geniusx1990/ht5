/* Task 2: Array Chunking

1. Create a function called `chunkArray` that takes an array and a chunk size as arguments.
The `chunkArray` function should divide the array into smaller arrays, each containing elements of the specified chunk size.
The function should return an array of arrays.

2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

function chunkArray(array, size) {
    let result = [];
    let count = 0;
    let test = [];
    for (let i = 0; i < array.length; i++) {
        test.push(array[i])
        count++;
 
        if (count === size) {
            console.log(test)
            result.push(test);
            count = 0;
            test = [];
        }


    }
    return result;
}
console.log(chunkArray(arr, 2));

/* 2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.
 */

function chunkArray(array, size) {
    const result = [];
    
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
  
    return result;
  }
  
  const chunkedArray = chunkArray(arr, 2);
  
  console.log(chunkedArray);
  