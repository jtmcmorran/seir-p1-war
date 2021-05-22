let dealer = [1,2,3,4,5,6,7,8,9,10];
let player = [];
let computer = [];
function shuffle(deck){
  for(let i = deck.length-1; i > 0; i--){
    const j = Math.floor(Math.random()*(i + 1));
    [deck[i], deck[j]] = [deck[j],deck[i]];
  }
  for(let i = deck.length; i>0; i--){
    if(i%2===0){
      player.push(dealer.pop());
    }
    else{
      computer.push(dealer.pop());
    }
  }
  console.log(player);
  console.log(computer);
}
function game(){
shuffle(dealer);

}
game();
