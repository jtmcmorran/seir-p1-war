let dealer = [1,2,3,4,5,6,7,8,9,10];
let player = [];
let computer = [];
function shuffle(deck){
  for(let i = deck.length-1; i > 0; i--){
    const j = Math.floor(Math.random()*(i + 1));
    [deck[i], deck[j]] = [deck[j],deck[i]];
  }
  console.log(deck);
}
shuffle(dealer);
