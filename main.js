
// Must write code comments to demonstrate understanding

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldgrid) {
      this._fieldgrid = fieldgrid
    }

    get fieldgrid () {
      return this._fieldgrid
    }

    print () {
      return this._fieldgrid.join('\n').replace(/,/g, '')
    }

    static generateField (height, width, percentageOfHoles) {

      // generate empty field with fixed height and width
      const array = new Array(height)
      for (let i = 0; i < array.length; i++) {
        array[i] = new Array(width)
      }
    
      // pathCharacter at the top right position
      array[0][0] = pathCharacter
    
      let randomVerticalPosition = Math.floor(Math.random()*height)
      let randomHorizontalPosition = Math.floor(Math.random()*width)
    
      while (randomVerticalPosition === 0 && randomHorizontalPosition === 0) {
        // Keep generating random positions until it's not [0][0].
        randomVerticalPosition = Math.floor(Math.random()*height);
        randomHorizontalPosition = Math.floor(Math.random()*width);
      }
    
      // Place hat at anywhere in the field except the top right position
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
      console.log(array.join('\n').replace(/,/g, ''))
    }
    

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


/*

const gameGrid = myField.fieldgrid
console.log(myField.print())

const currentLocation = gameGrid[0][0]

const inputDirection = () => {  

  let j = 0, k = 0
  while (j < 3 || k < 3) {
    let direction = prompt('Which way?')
    direction = direction.toLowerCase()
    
    // Moving to right
    if (direction === 'r') {  
      k++
      if (k >= 0 && k < 3) {
          gameGrid[j][k] = pathCharacter
          console.log(myField.print()) 
          console.log(`Coordinate of ${pathCharacter} is: ${j}, ${k}`)
      } else {
          console.log('Out of bound! Game over')
          break
      }

    // Moving to left 
    } else if (direction === 'l') { 
      k--
      if (k >= 0 && k < 3) {
        gameGrid[j][k] = pathCharacter
        console.log(myField.print())  
        console.log(`Coordinate of ${pathCharacter} is: ${j}, ${k}`)
      } else {
        console.log('Out of bound! Game over')
        break        
      }

    // Moving to down
    } else if (direction === 'd') { 
      j++
      if (j >= 0 && j < 3) {
        gameGrid[j][k] = pathCharacter
        console.log(myField.print())  
        console.log(`Coordinate of ${pathCharacter} is: ${j}, ${k}`)
      } else {
        console.log('Out of bound! Game over')
        break           
      }

    // Moving to up
    } else if (direction === 'u') { 
      j--
      if (j >= 0 && j < 3) {
        gameGrid[j][k] = pathCharacter
        console.log(myField.print())  
        console.log(`Coordinate of ${pathCharacter} is: ${j}, ${k}`)        
      } else {
        console.log('Out of bound! Game over')
        break      
      }

    }
    else {
      console.log(`Please enter "u", "d", "l" or "r" only`) }

  }
  
}
  
console.log('Enter "u" for Up \nEnter "d" for Down \nEnter "l" for Left \nEnter "r" for Right')
inputDirection()

*/


// Field.generateField(3, 5, 30)


