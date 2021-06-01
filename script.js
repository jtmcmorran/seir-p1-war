class Card{
  constructor(val, id){
    this.val = val;
    this.id = id;
  }
}

const suits =["spades","diamonds","clubs","hearts"];
const cards =["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"];
let dealer = [];
let player = [];
let computer = [];
let playButton = document.getElementById("play");
let playerCard = document.querySelector(".player");
let computerCard = document.querySelector(".computer");
let playerCount = document.getElementById("playerCount");
let computerCount = document.getElementById("computerCount");
//shuffle function
function shuffle(deck){
  for(let i = deck.length-1; i > 0; i--){
    const j = Math.floor(Math.random()*(i + 1));
    [deck[i], deck[j]] = [deck[j],deck[i]];
  }
}

function game(){
  //create deck
  for(let i = 0;i<suits.length;i++){
    for(let j = 0; j<cards.length;j++){
      let card = new Card(j+2,(cards[j]+"-"+suits[i]));
      dealer.push(card);
    }
  }
  shuffle(dealer);
  deal();
}
function deal(){
  for(let i = dealer.length; i>0; i--){
    if(i%2===0){
      player.push(dealer.pop());
    }
    else{
      computer.push(dealer.pop());
    }
  }
}
game();


playButton.addEventListener( 'click', flip => {
  playerCard.id = (player[0].id);
  computerCard.id = (computer[0].id);
  if(player[0].val > computer[0].val){
    player.push(player.shift());
    player.push(computer.shift());
  }
  else if(player[0].val < computer[0].val){
    computer.push(player.shift());
    computer.push(computer.shift());
  }
  else{
    computer.push(computer.shift());
    player.push(player.shift());
  }
  computerCount.innerHTML = ("Computer Cards:"+computer.length);
  playerCount.innerHTML = ("Player Cards:"+player.length);
  if(player.length==52){
    computerCount.innerHTML = "LOSER!";
    playerCount.innerHTML = "WINNER!";
  }
  if(computer.length==52){
    computerCount.innerHTML = "WINNER!";
    playerCount.innerHTML = "LOSER!";
  }
});
