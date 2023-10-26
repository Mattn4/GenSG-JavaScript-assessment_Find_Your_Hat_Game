// Must write code comments to demonstrate understanding

// import modules
const generateField = require("./generateField.js")

//----------------------------------------------------------------

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldgrid) {
      this.fieldgrid = fieldgrid
    }

    print () {
      return this.fieldgrid.join('\n').replace(/,/g, '')
    }

    static genField = generateField   
}

//--------------------Default field provided in Codecademy-----------------------------
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

// Generate randomized field with 3 parameters (height, width, perpercentageOfHoles)
const gameGrid = Field.genField(5,10,20)

// Finding the starting index position of pathCharacter '*'

const findStartVerticalPosition = () => {
  for (let i=0; i<gameGrid.length; i++) {
    if (gameGrid[i].includes('*')) {
      return i
    }
  }
}

const startingVerticalPosition = findStartVerticalPosition() 
const startingHorizontalPosition = gameGrid[findStartVerticalPosition()].indexOf('*')

//--------------------------Start the game--------------------------------------------
console.log('\nWelcome to the "Find Your Hat" game. \nGoal: Move your character (*) to reach the hat (^), while avoiding the holes (O). \n\nWarning: If you trip into a hole or move out of field, it is game over!')
console.log('\nEnter "u" for Up \nEnter "d" for Down \nEnter "l" for Left \nEnter "r" for Right \n')

let v = startingVerticalPosition, h = startingHorizontalPosition
while (true) {
  console.log(gameGrid.join('\n').replace(/,/g, ''))

  let direction = prompt('Which way?')
  direction = direction.toLowerCase()
    
  switch (direction) {
    case 'r': // Moving right
      h++
      if (h < 0 || h > gameGrid[0].length-1) {
        console.log('Out of field! Game over')
        return
      } else if (gameGrid[v][h] === hole) {
        console.log('You trip into a hole! Game over')
        return
      } else if (gameGrid[v][h] === hat) {
        console.log('You found the hat! You win!')
        return
      } else {
        gameGrid[v][h] = pathCharacter
      }
      break    

      /* const grid = gameGrid[v][h]
      switch (grid) {
      case hole:
          gameMessage('You trip into a hole! Game over')
          break
      case hat:
          gameMessage('You found the hat! You win!')
          break
      default:
          gameGrid[v][h] = pathCharacter
          gameMessage(myField.print()) 
          break
      } */ 
  
    case 'l': // Moving left 
      h--
      if (h < 0 || h > gameGrid[0].length-1) {
        console.log('Out of field! Game over')
        return
      } else if (gameGrid[v][h] === hole) {
        console.log('You trip into a hole! Game over')
        return
      } else if (gameGrid[v][h] === hat) {
        console.log('You found the hat! You win!')
        return
      } else {
        gameGrid[v][h] = pathCharacter
      }
      break

    case 'd': // Moving to down
      v++
      if (v < 0 || v > gameGrid.length-1) {
        console.log('Out of field! Game over')
        return
      } else if (gameGrid[v][h] === hole) {
        console.log('You trip into a hole! Game over')
        return
      } else if (gameGrid[v][h] === hat) {
        console.log('You found the hat! You win!')
        return
      } else {
        gameGrid[v][h] = pathCharacter
      }
      break
  
    case 'u': // Moving up
      v--
      if (v < 0 || v > gameGrid.length-1) {
        console.log('Out of field! Game over')
        return
      } else if (gameGrid[v][h] === hole) {
        console.log('You trip into a hole! Game over')
        return
      } else if (gameGrid[v][h] === hat) {
        console.log('You found the hat! You win!')
        return
      } else {
        gameGrid[v][h] = pathCharacter
      }
      break

    default:
      console.log(`Please enter "u", "d", "l" or "r" only`)
      break
  }
} 


/*
function gameMessage(result = ""){
    console.log(result);
} */

// retain this gameMessage function, but use back original if else statements instead of switch

