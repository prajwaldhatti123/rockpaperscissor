 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0 
  };
// if(score===null){
//   score = {
//     wins:0,
//     losses:0,
//     ties:0
//   };
// } 

// pressing initial letters of rock paper scissors as r,p,s to play the game  
// for Rock--->
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r' || event.key==='R'){
    playgame('Rock');
  }
})


// for 'Paper'--->
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='p' || event.key==='P'){
    playgame('Paper');
  }
})


// for Scissors--->
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='s' || event.key==='S'){
    playgame('Scissors');
  }
})


// displaying score
function display(){
document.querySelector('.p2').innerHTML = 
`Wins : ${score.wins}      Losses : ${score.losses}      Ties : ${score.ties}`;

}

// reset function
function Reset(){
score.wins=0;
score.losses=0;
score.ties=0;
localStorage.removeItem('score');
document.querySelector('.p3').innerHTML = ``;
document.querySelector('.p4').innerHTML = ``;
}

function playgame(playerMove){
  const computerMove=computermove();
   let result ='';
 if(playerMove==='Rock'){
   if(computerMove==='Rock'){
result = 'TIE. ';
}else if(computerMove==='Scissors'){
result = 'YOU WIN. ';
}
else{result = 'YOU LOST. ';}

// // update score 
// if(result === 'YOU WIN. '){
//   score.wins +=1;
// } else if(result==='YOU LOST. '){
//   score.losses +=1;
// } else{
//   score.ties+=1;
// }

// alert(`you picked ${playerMove} computer picked ${computerMove} hence ${result}
// Wins : ${score.wins}      Losses : ${score.losses}      Ties : ${score.ties}`); 

 }

 // paper
 else if(playerMove==='Paper'){
  if(computerMove==='Rock'){
result = 'YOU WON. ';
}else if(computerMove==='Scissors'){
result = 'YOU LOST. ';
}
else{result = 'TIE. ';}

// update score 
//  if(result === 'YOU WIN. '){
//   score.wins +=1;
// } else if(result==='YOU LOST. '){
//   score.losses +=1;
// } else{
//   score.ties+=1;
// }

// alert(`you picked ${playerMove} computer picked ${computerMove} hence ${result}
// Wins : ${score.wins}      Losses : ${score.losses}      Ties : ${score.ties}`); 
 }

 //scissors
 else{
  if(computerMove==='Scissors'){
result = 'YOU LOST. ';
}
else if(computerMove==='Scissors'){
result = 'TIE. ';
}
else{result = 'YOU WON.';}
}
// update score 
if(result === 'YOU WIN. '){
score.wins +=1;
} else if(result==='YOU LOST. '){
score.losses +=1;
} else{
score.ties+=1;
}

// store result in local storage
localStorage.setItem('score',JSON.stringify(score));
display();

// alert(`you picked ${playerMove} computer picked ${computerMove} hence ${result}
// Wins : ${score.wins}      Losses : ${score.losses}      Ties : ${score.ties}`); 


// update result
document.querySelector('.p3').innerHTML = `${result}`;

// compare score with computer 
document.querySelector('.p4').innerHTML = `You <img src="${playerMove}.png" class="moves">  
<img src="${computerMove}.png" class="moves">
Computer `;



}
 


     // computermove      
  function computermove(){
    let computerMove = '';
    const randomNUmber = Math.random();
if(randomNUmber>=0 && randomNUmber< 1/3){
computerMove = 'rock';
} else if(randomNUmber>=1/3 && randomNUmber<2/3 ){
computerMove = 'Paper';
}else{
computerMove = 'Scissors';
} 
return computerMove; 
  }
