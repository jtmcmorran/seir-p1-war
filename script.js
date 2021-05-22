const deck = [1,2,3,4,5,6,7,8,9,10];

function shuffle(deck){
  for( let i = 0; i < deck.length;i++){
    let val = (Math.floor(Math.random() * ((deck.length - i) - 0 + 1) + 0));
    let card = deck.splice(val,1);
    deck.push(card);
  }
  for(let i = 0; i < deck.length;i++){
    console.log(deck[i]);
  }
}

shuffle(deck);
