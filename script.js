'use strict';

    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    let score = 20;
    let highscore = 0;

    const displayMessage = function(message){
        document.querySelector('.message').textContent = message;
    }

    document.querySelector('.check').addEventListener('click', function(){

        //Assign a random number 
        const guess = Number(document.querySelector('.guess').value);

        if(!guess){
            displayMessage("⛔ No Number!");
        
            //When the player wins 
        }
        else if(guess>20){
            
            if (score >1){
                    document.querySelector('.message').textContent = "your number is out of range";
                    score=score-5;
                    document.querySelector('.score').textContent = score;
                    }else {
                        document.querySelector('.message').textContent = "💥 You lost the game!";
                        document.querySelector('.score').textContent = 0;
                    }
        }
        
        else if(guess<1){
 
            if (score >1){
                    document.querySelector('.message').textContent = "your number is out of range";
                    score=score-5;
                    document.querySelector('.score').textContent = score;
                    }else {
                        document.querySelector('.message').textContent = "💥 You lost the game!";
                        document.querySelector('.score').textContent = 0;
                    }
        }

        else if(guess === secretNumber){
            displayMessage("🎉 Correct Number");
            //Show the correct number when the guess is correct
            document.querySelector('.number').textContent = secretNumber;
            //Changing the css when the player wins the game
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
            //Assign Highscore
            if (score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            //When the number is wrong 
        }
    
    });


        // } else if(guess < secretNumber){
        //     if (score >1){
        //     document.querySelector('.message').textContent = "📉 Too Low!";
        //     score--;
        //     document.querySelector('.score').textContent = score;
        //     }else {
        //         document.querySelector('.message').textContent = "💥 You lost the game!";
        //         document.querySelector('.score').textContent = 0;
        //     }


        //     //When the number is more
        // }else if(guess > secretNumber){
        //     if (score >1){
        //         document.querySelector('.message').textContent = "📈 Too High!";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //         }else {
        //             document.querySelector('.message').textContent = "💥 You lost the game!";
        //             document.querySelector('.score').textContent = 0;
        //         }

        // }
    // });

//Making everything to Default when the play again button is clicked.
document.querySelector('.again').addEventListener("click", function(){
    //Reassign score to maximum to restart the game
    score = 20;
    document.querySelector('.score').textContent = score;

    //Assign a new random number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";

    //Making the message default and the input value to none
    displayMessage("Start guessing...");
    document.querySelector('.guess').value = '';

    //Changing the css of the page to default
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});