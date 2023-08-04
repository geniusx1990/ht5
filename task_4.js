/* 1. Create a function called `getArrayIntersection` that takes two arrays as arguments and returns 
a new array containing the common elements between the two arrays.

2. Create a function called `getArrayUnion` that takes two arrays as arguments 
and returns a new array containing all unique elements from both arrays, without any duplicates.
 */


let arr1 = ['banana', 'apple', 'melon', 'melon', 'melon'];
let arr2 = ['banana', 'melon'];
function getArrayIntersection(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }

    return result
}

console.log(getArrayIntersection(arr1, arr2));



function getArrayUnion(array1, array2) {
    let uniqueElements = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !uniqueElements.includes(array1[i])) {
            uniqueElements.push(array1[i]);
        }
    }

    return uniqueElements
}

console.log(getArrayUnion(arr1, arr2));
