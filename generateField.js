
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const generateField = (height, width, percentageOfHoles) => {

    // generate empty field with fixed height and width
    const array = new Array(height)
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(width)
    }
  
    // pathCharacter at the top left position
    array[0][0] = pathCharacter
  
    let randomVerticalPosition = Math.floor(Math.random()*height)
    let randomHorizontalPosition = Math.floor(Math.random()*width)
  
    while (randomVerticalPosition === 0 && randomHorizontalPosition === 0) {
      // Keep generating random positions until it's not [0][0].
      randomVerticalPosition = Math.floor(Math.random()*height)
      randomHorizontalPosition = Math.floor(Math.random()*width)
    }
  
    // Place hat at anywhere in the field except the top left position
    array[randomVerticalPosition][randomHorizontalPosition] = hat
  
    // fill in the remaining space in the field with hole & fieldCharacter
    // a certain percentage of the field is filled with holes
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (array[i][j] !== pathCharacter && array[i][j] !== hat) {
          const randomPercentage = Math.floor(Math.random()*101)
          if (randomPercentage <= percentageOfHoles) {
            array[i][j] = hole
          } else {
            array[i][j] = fieldCharacter
          }
        }
      }
    }
    return array
}

module.exports = generateField 