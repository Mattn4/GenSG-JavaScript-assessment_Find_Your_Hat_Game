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
      this._fieldgrid = fieldgrid
    }

    get fieldgrid () {
      return this._fieldgrid
    }

    print () {
      return this._fieldgrid.join('\n').replace(/,/g, '')
    }

    static genField = generateField
    
}


//--------------------Default field provided in Codecademy-----------------------------
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

//--------------------Generate randomized field for each game-----------------------------
const gameGrid = Field.genField(3,5,50)

//--------------------Function to moving direction in the game-----------------------------
const inputDirection = () => {  

  let j = 0, k = 0
  while (true) {
    let direction = prompt('Which way?')
    direction = direction.toLowerCase()
    
    // Moving to right
    if (direction === 'r') {  
      k++
      if (k < 0 || k > gameGrid[0].length-1) {
        console.log('Out of bound! Game over')
        break
      } else {
        if (gameGrid[j][k] === hole) {
          console.log('You trip into a hole! Game over')
          break
        } else if (gameGrid[j][k] === hat) {
          console.log('You found the hat! You win!')
          break
        } else {
          gameGrid[j][k] = pathCharacter
          console.log(gameGrid.join('\n').replace(/,/g, '')) 
        }    
         
     /* const grid = gameGrid[j][k]

        switch (grid) {
        case hole:
            gameMessage('You trip into a hole! Game over')
            break
        case hat:
            gameMessage('You found the hat! You win!')
            break
        default:
            gameGrid[j][k] = pathCharacter
            gameMessage(myField.print()) 
            break
        } */ 
   
      }


    // Moving to left 
    } else if (direction === 'l') { 
      k--
      if (k < 0 || k > gameGrid[0].length-1) {
        console.log('Out of bound! Game over')
        break
      } else {
        if (gameGrid[j][k] === hole) {
          console.log('You trip into a hole! Game over')
          break
        } else if (gameGrid[j][k] === hat) {
          console.log('You found the hat! You win!')
          break
        } else {
          gameGrid[j][k] = pathCharacter
          console.log(gameGrid.join('\n').replace(/,/g, '')) 
        }          
      }

    // Moving to down
    } else if (direction === 'd') { 
      j++
      if (j < 0 || j > gameGrid.length-1) {
        console.log('Out of bound! Game over')
        break
      } else {
        if (gameGrid[j][k] === hole) {
          console.log('You trip into a hole! Game over')
          break
        } else if (gameGrid[j][k] === hat) {
          console.log('You found the hat! You win!')
          break
        } else {
          gameGrid[j][k] = pathCharacter
          console.log(gameGrid.join('\n').replace(/,/g, '')) 
        }          
      }


    // Moving to up
    } else if (direction === 'u') { 
      j--
      if (j < 0 || j > gameGrid.length-1) {
        console.log('Out of bound! Game over')
        break
      } else {
        if (gameGrid[j][k] === hole) {
          console.log('You trip into a hole! Game over')
          break
        } else if (gameGrid[j][k] === hat) {
          console.log('You found the hat! You win!')
          break
        } else {
          gameGrid[j][k] = pathCharacter
          console.log(gameGrid.join('\n').replace(/,/g, '')) 
        }          
      }


    }
    else {
      console.log(`Please enter "u", "d", "l" or "r" only`) }

  }
  
}

//--------------------------Start the game--------------------------------------------
console.log('\nWelcome to the "Find Your Hat" game. \nGoal: Move your character (*) to reach the hat (^), while avoiding the holes (O). \n\nWarning: If you trip into a hole or move out of bound, it is game over!')
console.log('\nEnter "u" for Up \nEnter "d" for Down \nEnter "l" for Left \nEnter "r" for Right \n')

console.log(gameGrid.join('\n').replace(/,/g, ''))
inputDirection()


/*
function gameMessage(result = ""){
    console.log(result);
} */

// retain this gameMessage function, but use back original if else statements instead of switch

