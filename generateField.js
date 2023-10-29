
// Create randomized field with character starting at random location
const generateField = (height, width, percentageOfHoles) => {
  const startingArray = ['*', '^']
  
  // Create an array made up of holes only
  // The number of holes is based on its percentage on the field 
  const numberOfHoles = Math.round((height*width-2)*percentageOfHoles/100)
  const arrayOfHoles = new Array(numberOfHoles).fill('O')
  
  // Create an array made up of fieldCharacter only
  // Its number is number of spaces available on the field - number of holes -'*' -'^'   
  const numberofField = (height*width-2) - numberOfHoles
  const arrayofField = new Array(numberofField).fill('░')

  // Combine startingArray, holes array, fieldCharacter array into one single array
  const initialField = startingArray.concat(arrayOfHoles).concat(arrayofField)

  // Function to shuffle the elements in an array based on Fisher-Yates Sorting Algorithm
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } 
    return array
  }

  // Shuffle all the elements in the initialField array
  const initialRandomizedField = shuffleArray(initialField)

  // Function to convert a single array into 2D array with fixed number of elements in each sub array
  const toMatrix = (arr, width) => {
    return arr.reduce(function (rows, key, index) { 
      return (index % width == 0 ? rows.push([key]) 
        : rows[rows.length-1].push(key)) && rows;
    }, []);
  }

  // Sort single array into 2D arrays
  // Eg If width is 10, there are 10 elements in each sub array
  const finalField = toMatrix(initialRandomizedField, width)

  return finalField
}


// Print to test out if a randomized field is generated correctly
// const testField = generateField(5, 10, 50)
// console.log(testField.join('\n').replace(/,/g, ''))

module.exports = generateField