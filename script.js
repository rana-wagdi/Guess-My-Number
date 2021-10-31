'use strict';

let checkButton = document.querySelector('.check');
let number = document.querySelector('.number');
let message = document.querySelector('.message')
let scores = document.querySelector('.score')
let again = document.querySelector('.again')
let heighScores = document.querySelector('.highscore')
// let guessVlaue = document.querySelector('.guess').value;


let secretNumber = Math.trunc(Math.random()*20+1)

let score = 20 
let highScore = 0

checkButton.addEventListener('click', function(){
    
    
    let guessVlaue = document.querySelector('.guess').value;
    console.log(guessVlaue);

    //when player win 
    if (guessVlaue == secretNumber){
        message.textContent = "you win"
        number.textContent= secretNumber
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'

        if(score > highScore){
            highScore = score ;
            heighScores.textContent= highScore;
        }

        //when player insert to heigh number
    }else if (guessVlaue > secretNumber){
        if (score > 0){
            message.textContent = "Too High!"
            score -- ;
            scores.textContent = score
        } else {
            message.textContent = "you lost my game"
        }
       
        //when player insert to low number  
     } else if (guessVlaue < secretNumber){
        if (score > 0){
        message.textContent ="Too Low"
        score -- ;
        scores.textContent = score
        }else {
            message.textContent = "you lost the game"
        }
    }
})

again.addEventListener('click', function(){
    
 secretNumber = Math.trunc(Math.random()*20+1)

 score = 20 

document.querySelector('.message').textContent='Start typing....'
document.querySelector('.score').textContent=score
document.querySelector('.number').textContent="?"
document.querySelector('.guess').value = '';



document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem'
   
})