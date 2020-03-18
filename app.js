let min=1;
let max=10;
let win=getRandom(min,max);
let chances=3;

//UI elements
const game=document.querySelector('.game');
const mini=document.querySelector('.min-num');
const maxi=document.querySelector('.max-num');
const input=document.querySelector('.num-input');
const check=document.querySelector('#check');
const msg=document.querySelector('.message');

//Assign values
mini.textContent=min;
maxi.textContent=max;

//Listen for input guess
check.addEventListener('click',getNumber);
function getNumber(){
    let guess = parseInt(input.value);
    if(isNaN(guess) || guess>max || guess<min){
        input.style.borderColor='red';
        msg.style.color='red';
        msg.textContent=`Kindly enter a number between ${min} and ${max}`;
    }
    else if(guess == win){
        input.style.borderColor='green';
        input.disabled='true';
        msg.style.color='green';
        msg.textContent=`${win} is correct. YOU WIN!`;
        playAgain();
    }
    else{
        chances -= 1;
        if(chances == 0){
            input.style.borderColor='red';
            input.disabled='true';
            msg.style.color='red';
            msg.textContent=`Game over. YOU LOST!. The correct number is ${win}`;
            playAgain();
        }
        else{
            input.value=''
            msg.style.color='red';
            msg.textContent=`Wrong guess. ${chances} chance(s) remaining`;
        }
    }
}

//Play again
function playAgain(){
    check.value='Play again';
    check.className += 'play-again';
}

//Play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Get random number within range
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}