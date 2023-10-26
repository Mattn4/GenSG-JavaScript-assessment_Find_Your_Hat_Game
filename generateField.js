
// create randomized field with character starting at random location
const generateField = (height, width, percentageOfHoles) => {
  const startingArray = ['*', '^']
  
  const numberOfHoles = Math.round(height*width*percentageOfHoles/100)
  const arrayOfHoles = new Array(numberOfHoles).fill('O')
  
  const numberofField = height*width - numberOfHoles - 2
  const arrayofField = new Array(numberofField).fill('░')

  const initialField = startingArray.concat(arrayOfHoles).concat(arrayofField)

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } 
    return array
  }

  const initialRandomizedField = shuffleArray(initialField)

  const toMatrix = (arr, width) => {
    return arr.reduce(function (rows, key, index) { 
      return (index % width == 0 ? rows.push([key]) 
        : rows[rows.length-1].push(key)) && rows;
    }, []);
  }

  const finalField = toMatrix(initialRandomizedField, width)

  return finalField
}


// Print to test out if a randomized field is generated correctly
// console.log(generateField(10, 10, 10).join('\n').replace(/,/g, ''))


/* create randomized field with character starting at top left corner
const generateField = (height, width, percentageOfHoles) => {

    // generate empty field with fixed height and width
    const array = new Array(height)
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(width)
    }
  
    // pathCharacter at the top left position
    array[0][0] = '*'
  
    let randomVerticalPosition = Math.floor(Math.random()*height)
    let randomHorizontalPosition = Math.floor(Math.random()*width)
  
    while (randomVerticalPosition === 0 && randomHorizontalPosition === 0) {
      // Keep generating random positions until it's not [0][0]
      randomVerticalPosition = Math.floor(Math.random()*height)
      randomHorizontalPosition = Math.floor(Math.random()*width)
    }
  
    // Place hat at anywhere in the field except the top left position
    array[randomVerticalPosition][randomHorizontalPosition] = '^'
  
    // fill in the remaining space in the field with hole & fieldCharacter
    // a certain percentage of the field is filled with holes
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (array[i][j] !== '*' && array[i][j] !== '^') {
          const randomPercentage = Math.floor(Math.random()*101)
          if (randomPercentage <= percentageOfHoles) {
            array[i][j] = 'O'
          } else {
            array[i][j] = '░'
          }
        }
      }
    }
    return array
}   */


module.exports = generateField  