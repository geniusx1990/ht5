/* Task 1: Advanced Array Filtering

1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments. 
The `customFilterUnique` function should filter the array using the callback function to determine uniqueness. 
The resulting array should contain only unique elements based on the callback's logic.

2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.

 */


let arr = [1, 2, 2, 4, 5, 5, 5, 5]

function customFilterUnique(array, callback) {
    const uniqueElements = [];
    const uniqueKeys = new Set();

    for (const element of array) {
        const key = callback(element);
        if (!uniqueKeys.has(key)) {
            uniqueKeys.add(key);
            if (typeof element === 'object') {
                uniqueElements.push(element);
            } else {
                uniqueElements.push(key);
            }
        }
    }

    return uniqueElements;
}

function mult(item) {
    return item * 2;
}



console.log(customFilterUnique(arr, mult))





let students = [{
    id: 1,
    name: 'John'
}, {
    id: 2,
    name: 'Alex'
}, {
    id: 3,
    name: 'Alex'
}, {
    id: 4,
    name: 'Alex'

},
{
    id: 5,
    name: 'Judith'
},
{
    id: 6,
    name: 'Tess'
}
]

function getName(obj) {
    return obj.name;
}

let resultStudents = customFilterUnique(students, getName);
console.log(resultStudents);
for (let i = 0; i < resultStudents.length; i++) {
    console.log(resultStudents[i])
}

