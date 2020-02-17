alert('Hello, friends.');
console.log("Up and running!");

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}];



const cardsInPlay = [];
function checkForMatch (){

if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

//code from previous exercise-cleaned up below//
// const cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// const cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

function flipCard (cardId){
const cardId = this.getAttribute('data-id')

	// console.log("User flipped " + cards[cardId].rank);

	// cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
}

	// flipCard (0);
	// flipCard(2);

console.log(flipCard.cardImage);
console.log(flipCard.suit);

function createBoard (){
	for (let i = 0; i < arrayName.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png')
				cardElement.setAttribute('data-id',i)

		cardElement.addEventListener('click', flipCard);
		document.getElementsById('game-board')[0].appendChild(cardElement);
	}
}

createBoard();





