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
  for(let i = dealer.length; i>0; i--){
    if(i%2===0){
      player.push(dealer.pop());
    }
    else{
      computer.push(dealer.pop());
    }
  }
  console.log(player);
  console.log(computer);
//    while(true){

  //  }
}
game();
