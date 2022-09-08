//funcion para 'tirar los dados'
function throwDices(){
  return (Math.ceil(Math.random()*6));
};

//tirar los dados
let dicePlayer1 = throwDices();
let dicePlayer2 = throwDices();

//poner la imagen correspondiente al valor del dado
document.getElementById('img1').src = `images/dice${dicePlayer1}.png` //forma 1
//document.getElementById('img2').src = `images/dice${dicePlayer2}.png`
document.getElementById('img2').setAttribute("src", `images/dice${dicePlayer2}.png`); //forma 2

console.log(dicePlayer1, dicePlayer2);

//Muestra quien ganó
if (dicePlayer1 > dicePlayer2){
  document.getElementById("title").innerHTML="PLAYER 1 WINS";
} else {
  if (dicePlayer1 === dicePlayer2){
    document.getElementById("title").innerHTML="DRAW";
  } else {
    document.getElementById("title").innerHTML="PLAYER 2 WINS";
  }
} 

  


