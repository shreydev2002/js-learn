# DOM Projects

## link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## Project 1 - color switcher

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    //    body.style.backgroundColor = e.target.id;   this also works but we must understand by using conditional statements
    if (e.target.id == "grey") body.style.backgroundColor = "grey";
    if (e.target.id == "white") body.style.backgroundColor = "white";
    if (e.target.id == "blue") body.style.backgroundColor = "blue";
    if (e.target.id == "yellow") body.style.backgroundColor = "yellow";
    if (e.target.id == "pink") body.style.backgroundColor = "pink";
  });
});
```

## Project 2 - BMI calc

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");
  const comment = document.querySelector("#comment");

  if (height == "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid Height";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span`;

    if (bmi < 18.6) comment.innerHTML = "Under Weight";
    else if (bmi >= 18.6 && bmi <= 24.9) comment.innerHTML = "Normal";
    else comment.innerHTML = "Over Weight";
  }
});
```

# PROJECT 3 - Digital Clock

```javascript
const clock = document.querySelector("#clock");

setInterval(function () {
  //to set interval
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString(); // time in form of hour:minute:second AM/PM
}, 1000); //1000 denotes 1000 milliseconds that is 1 second
```

# PROJECT 4 - Guess The Number

```javascript
let randomnum = parseInt(Math.random() *100 +1);
// console.log(randomnum);

const userInput = document.querySelector('#guessbox');
const submit = document.querySelector('#guessSubmit');
const guessSlot = document.querySelector('.prev');
const remaining = document.querySelector('.rem');
const  lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
 
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = userInput.value;
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess))
    { alert('Please enter a valid number')}
    else if(guess < 1)
    { alert('Please enter a number more than 1')}
    else if(guess > 100)
    { alert('Please enter a number less than 100')}
    else{
        numGuess++;
        prevGuess.push(guess)
        if(numGuess == 10 ){
            displayGuess(guess)
            displaymsg(`Game Over. Random number was ${randomnum}`)
            // remaining.innerHTML="0"
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess == randomnum){
        displaymsg(`You guessed it right ~>  ${guess}`)
        endGame()
    }
    if(guess < randomnum){
        displaymsg(`Number is too low`)
        // endGame()
    }
    if(guess > randomnum){
        displaymsg(`Number is too high`)
        // endGame()
    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML += `${guess}_`
    // numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}
function displaymsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
     userInput.value='';
     userInput.setAttribute('disabled','');
     p.classList.add('button');
     p.innerHTML = '<h2 id="newGame" >Start New Game</h2>';
     startover.appendChild(p);
     playGame = false;  
     newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    randomnum = parseInt(Math.random() *100 +1);
    prevGuess=[];
    numGuess=0;
    guessSlot.innerHTML='';
    remaining.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p); 

    playgame = true;
    })
}

```
