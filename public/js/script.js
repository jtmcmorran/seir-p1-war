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
let pool = [];
let playButton = document.querySelector("button");
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

game();


function flip(){
  playButton.innerHTML = "Play!";
  playerCard.id = (player[0].id);
  computerCard.id = (computer[0].id);
  if(player[0].val > computer[0].val){
    player.push(player.shift());
    player.push(computer.shift());
    if(pool.length > 0){
      for(let i = pool.length; i > 0; i--){
        player.push(pool.shift());
      }
    }
  }
  else if(player[0].val < computer[0].val){
    computer.push(player.shift());
    computer.push(computer.shift());
    if(pool.length > 0){
      for(let i = pool.length;i > 0; i--){
        computer.push(pool.shift());
      }
    }
  }
  else{
    if(player.length > 4 && computer.length > 3){
      for(let i = 0;i < 4; i++){
        pool.push(player.shift());
        pool.push(computer.shift());
      }
    }
    else{
      if(player.length < computer.length){
        for(let i = player.length;i > 1; i--){
          pool.push(player.shift());
          pool.push(computer.shift());
        }
      }
      else{
        for(let i = computer.length; i > 1; i--){
          pool.push(player.shift());
          pool.push(computer.shift());
        }
      }
    }
    playButton.innerHTML = "War! " + pool.length + " cards in pool!"

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
}

playButton.onclick = flip;
