// SNAIL CODING CHALLENGE
// Create a function that accepts an array. Given an n x n array return the arrray numbers from outermost numbers to the middle. Traveling clockwise.

// PSUEDO CODE
    // create a function that accepts an array
    // create an empty array that will serve as the final array
    // make a loop that goes over the entire array
        // get the first row (the first array)
        // get items at the end of all arrays to create right side of snail
        // reverse the bottom row
        // get beginning items of the array to create left side

const snail = (arr) =>{
    let snailArray = []
    while(arr.length){
        snailArray.push(...arr.shift())
        for (let i = 0; i < arr.length; i++){
        snailArray.push(arr[i].pop())
        }
        snailArray.push(...(arr.pop() || []).reverse())
        for (let i = arr.length -1; i >= 0; i--){
        snailArray.push(arr[i].shift())
        }
    }
    console.log(snailArray) 
    }

snail([[1,2,3], [4,5,6], [7,8,9]]); 
// expected output [1,2,3,6,9,8,7,4,5]