// Must write code comments to demonstrate understanding

const generateField = require("./generateField.js")  //import modules

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

//Default field provided in Codecademy
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

//Function to restart game or exit
const startNewGameOrExit = () => {
  console.log('\nDo you want play again? \Enter "yes" to start a new game \nEnter anything else to exit the game')
  let question = prompt()
  question = question.toLowerCase()

  if (question === 'yes') {
    startGame()
  } else {
    process.exit()
  }
}

//-------------------------------Function to Start the game--------------------------------------------
const startGame = () => {

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
  let v = findStartVerticalPosition() // Starting vertical position
  let h = gameGrid[findStartVerticalPosition()].indexOf('*') // Starting horizontal position

  // Function for horizontal movement
  const horizontalMovement = direction => {
    if (direction === 'r') {
      h++
    } else if (direction === 'l') {
      h--
    }

    if (h < 0 || h > gameGrid[0].length-1) {
      console.log('Out of field! Game over')
      startNewGameOrExit()
    } else if (gameGrid[v][h] === hole) {
      console.log('You trip into a hole! Game over')
      startNewGameOrExit()
    } else if (gameGrid[v][h] === hat) {
      console.log('You found the hat! You win!')
      startNewGameOrExit()
    } else {
      gameGrid[v][h] = pathCharacter
    }
  }

  // Function for vertical movement
  const verticalMovement = direction => {
    if (direction === 'u') {
      v--
    } else if (direction === 'd') {
      v++
    }

    if (v < 0 || v > gameGrid.length-1) {
      console.log('Out of field! Game over')
      startNewGameOrExit()
    } else if (gameGrid[v][h] === hole) {
      console.log('You trip into a hole! Game over')
      startNewGameOrExit()
    } else if (gameGrid[v][h] === hat) {
      console.log('You found the hat! You win!')
      startNewGameOrExit()
    } else {
      gameGrid[v][h] = pathCharacter
    }
  }
  
  console.log('\n------------------------------------------------------------------------------------')
  console.log('Welcome to the "Find Your Hat" game. \nGoal: Move your character (*) to reach the hat (^), while avoiding the holes (O). \n\nWarning: If you trip into a hole or move out of field, it is game over!')
  console.log('\nPress "u" for ↑ \nPress "d" for ↓ \nPress "l" for ← \nPress "r" for → \nPress "q" to quit the game\n') 

  while (true) {
    console.log(gameGrid.join('\n').replace(/,/g, ''))

    let direction = prompt('Which way?')
    direction = direction.toLowerCase()     

    switch (direction) {
      case 'r': // Move right      
      case 'l': // Move left
        horizontalMovement(direction)
        break   
    
      case 'u': // Move up
      case 'd': // Move down
        verticalMovement(direction)
        break

      case 'q': // quit the game
        console.log('You have quit the game.')
        process.exit()
        break    

      default:
        console.log(`Please enter "u", "d", "l" or "r" only`)
        break
    }
  } 

}

// Start the game
startGame()


/*----------------------------------------------------------------------------------------------------
function gameMessage(result = ""){
    console.log(result);
} 
retain this gameMessage function, but use back original if else statements instead of switch 


Main issues 
gameGrid[v][h]
  if h is out of range, result be undefined
  but if v is out of range, will appear error
  so cannot use "gameGrid[v][h] === undefined"


Enhancements to considers
Change all console log (print message) to single function (game message function)
in the game message function:
If win the game, ask player if wanna play another round or at harder level?
*/