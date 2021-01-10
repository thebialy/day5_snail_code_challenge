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

const snail = (arr) => {
  const snailArray = [];
  while(arr.length){
      snailArray.push(...arr.shift())
      for(let i = 0; i < arr.length; i++) {
          snailArray.push(...arr[i].pop())
      }
  }
}