/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, dice, pointsToWin;
const diceImage = document.querySelector('.dice');
const diceImage2 = document.querySelector('.dice2');
const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const player0Panel = document.querySelector('.player-0-panel');
const player1Panel = document.querySelector('.player-1-panel');
const buttonRoll = document.querySelector('.btn-roll');
const buttonHold = document.querySelector('.btn-hold');
const buttonNewGame = document.querySelector('.btn-new');
const pointsToWinInput = document.querySelector('#points-to-win');

newGame();

buttonRoll.addEventListener('click', function(){
    if(gamePlaying){
        diceImage.style.filter = '';
        diceImage2.style.filter = '';

        // Generate random number between 1 and 6
        dice = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        // Display the number on die
        diceImage.style.display = 'block';
        diceImage2.style.display = 'block';
        diceImage.src = 'dice-' + dice + '.png';
        diceImage2.src = 'dice-' + dice2 + '.png';
        
        //   Reset player score if 2 6's in same turn
        if (dice === 6 && dice2 === 6){
            // Reset player score
            scores[activePlayer] = 0

            // Update UI
            document.querySelector('#score-'  + activePlayer).textContent = scores[activePlayer];

            // Go to next player
            nextPlayer();

          // Update roundScore unless player rolls a 1
        } else if(dice !== 1 && dice2 !==1){
            roundScore += dice + dice2;
            document.querySelector('#current-'  + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

buttonHold.addEventListener('click', function(){
    if(gamePlaying){
        //Add current score to player global score
        scores[activePlayer] += roundScore;

        //Update UI
        document.querySelector('#score-'  + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= pointsToWin){
            document.querySelector('#name-'  + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-'  + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
})

buttonNewGame.addEventListener('click', newGame);

pointsToWinInput.addEventListener('keyup', function(){
    pointsToWin = pointsToWinInput.value;
});

function nextPlayer(){
    activePlayer = ((activePlayer === 0) ? 1 : 0);
    roundScore = 0;

    current0.textContent = '0';
    current1.textContent = '0';

    diceImage.style.filter = 'blur(2px)';
    diceImage2.style.filter = 'blur(2px)';

    player0Panel.classList.toggle('active');
    player1Panel.classList.toggle('active');
}

function newGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    gamePlaying = true;

    diceImage.style.display = 'none';
    diceImage2.style.display = 'none';

    player0Panel.classList.add('active');
    player1Panel.classList.remove('active');

    player0Panel.classList.remove('winner');
    player1Panel.classList.remove('winner');
}