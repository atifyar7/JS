# Solution code
## Project 4

javaScript
```javascript

let randomNumber = (parseInt(Math.random() *100 + 1))

const submitButton = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remainingGuess = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 0
let playGame = true

if(playGame){
  submitButton.addEventListener("click", function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }else if(guess <1){
    alert("Please enter number greater than 1")
  }else if(guess >100){
    alert("Please enter a number less than 100")
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      cleanUp(guess)
      displayMessage(`Game Over !! Random number was ${randomNumber}`)
      endGame()
    }else{
      cleanUp(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage("You Won!! You guessed a right number")
    endGame()
  }else if(guess < randomNumber){
    displayMessage("Your number is low")
  }else if(guess > randomNumber){
    displayMessage("Your Number is high")
  }
}

function cleanUp(guess){
  userInput.value =""
  guessSlot.innerHTML += `${guess} , `
  numGuess++
  remainingGuess.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ""
  userInput.setAttribute("disabled", "")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click", function(e){
    randomNumber = (parseInt(Math.random() *100 + 1))
    prevGuess = []
    numGuess = 0
    guessSlot.innerHTML = ""
    remainingGuess.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame = true
  })
}

```