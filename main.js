
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

    /*
    currentPlayState (function) {
      function
    }
    */

    /*
    print () {
      this._fieldgrid.forEach(element => 
        console.log(element.join().replace(/,/g, ''))
        )
    } */

    print () {
      return this._fieldgrid.join('\n').replace(/,/g, '')
    }

    static generateField(height, width) {

    }
    
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


const gameGrid = myField.fieldgrid
console.log(myField.print())

const currentLocation = gameGrid[0][0]

const inputDirection = () => {
  
  let direction = prompt('Which way?')
    direction = direction.toLowerCase()

  let i = 0, j = 0, k = 0
  while (i < 5) {
    if (direction === 'r') {  
      gameGrid[j][k+1] = pathCharacter
      console.log(myField.print()) 
      k++
    }
    else if (direction === 'd') {  
      gameGrid[j+1][k] = pathCharacter
      console.log(myField.print())  
      j++
    }
    else {
      console.log(`Please enter "u", "d", "l" or "r" only`) }

    i++
  }

  
}
  

console.log('Enter "u" for Up \nEnter "d" for Down \nEnter "l" for Left \nEnter "r" for Right')
inputDirection()



