'use strict';

let checkButton = document.querySelector('.check');
let number = document.querySelector('.number');
let message = document.querySelector('.message')
let scores = document.querySelector('.score')

let secretNumber = Math.trunc(Math.random()*20+1)

number.textContent= secretNumber
let score = 20 
checkButton.addEventListener('click', function(){
    
    
    let guessVlaue = document.querySelector('.guess').value;
    console.log(guessVlaue);
    if (guessVlaue == secretNumber){
        message.textContent = "you win"
        
    }
     if (guessVlaue > secretNumber){
        message.textContent = "too high"
        
        score -- ;
        scores.textContent = score
      
     } else if (guessVlaue < secretNumber){
        message.textContent ="too low"
        score -- ;
        scores.textContent = score
     }
})

