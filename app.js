

// .player-0-panel 
// #name-0
// #score-0
// #current-0

// .player-1-panel 
// #name-1
// #score-1
// #current-1

// .btn-new
// .btn-roll
// .btn-hold

// .dice

var scores,roundScore,activePlayer;
init()
function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.querySelector('#name-0').textContent="Player 1"
    document.querySelector('#name-1').textContent="Player 2"
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.btn-roll').disabled=false;
    document.querySelector('.btn-hold').disabled=false
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    //alert('hello')
    // Math.random()
    // Math.random()*6
    // Math.floor(Math.random()*6)
    // Math.floor(Math.random()*6)+1
    var dice=Math.floor(Math.random()*6)+1;
    //console.log(dice)
    //console.log(document.querySelector('.dice'));
    var diceDOM=document.querySelector('.dice')
    diceDOM.src="dice-"+dice+".png";
    diceDOM.style.display="block"

    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        nextPlayer()
    }
})
function nextPlayer(){
    activePlayer === 0 ? activePlayer=1: activePlayer=0
    //console.log(activePlayer)
    roundScore=0
    document.querySelector('.dice').style.display='none';
    document.querySelector('#current-0').textContent='0'
    document.querySelector('#current-1').textContent='0'
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}
document.querySelector('.btn-hold').addEventListener('click',function(){
    //console.log('hold')
    scores[activePlayer] += roundScore;
    //console.log(scores[activePlayer])
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-'+activePlayer).textContent="WINNER !";
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        document.querySelector('.dice').style.display="none"
        document.querySelector('.btn-roll').disabled=true;
        document.querySelector('.btn-hold').disabled=true
    }else{
        nextPlayer()
    }
})
// document.querySelector('.btn-new').addEventListener('click',function(){
//     init()
// })
document.querySelector('.btn-new').addEventListener('click',init)


function Person(name,email,mobile,city){
    this.fullname=name;
    this.useremail=email;
    this.usermobile=mobile;
    this.usercity=city;
}//Contructor Function = BluePrint
var mgmg=new Person('mgmg','mg@gmail.com',123,'yangon')//Instance Object
var agag=new Person('agag','ag@gmail.com',123,'mandalay')//Instance Object
console.log(mgmg)
console.log(agag)
