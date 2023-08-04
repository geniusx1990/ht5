/* Task 1: Advanced Array Filtering

1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments. 
The `customFilterUnique` function should filter the array using the callback function to determine uniqueness. 
The resulting array should contain only unique elements based on the callback's logic.

2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.

 */


let arr = [1, 2, 2, 4, 5, 5, 5, 5]
function customFilterUnique(arr, callback) {
    return arr.filter((item, index) => {
        for (let i = 0; i < index; i++) {
            if (callback(item, arr[i])) {
                return false;
            }
        }
        return true;
    })

}

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


console.log(customFilterUnique(arr, (a, b) => a === b))
let resultStudents = customFilterUnique(students, (a, b) => a.name === b.name);
for (let i = 0; i < resultStudents.length; i++) {
    console.log(resultStudents[i])
}