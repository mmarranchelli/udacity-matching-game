/*
 * Create a list that holds all of your cards
 */

const symbolsForAllCards = [
  "diamond",
  "paper-plane-o",
  "anchor",
  "bolt",
  "cube",
  "leaf",
  "bicycle",
  "bomb",
  "diamond",
  "paper-plane-o",
  "anchor",
  "bolt",
  "cube",
  "leaf",
  "bicycle",
  "bomb"
];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Create array with random card position
const randomCards = shuffle(symbolsForAllCards);

// Adding li to ul
const deck = document.querySelector(".deck");

const fragment = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
  const newElement = document.createElement('li');
  newElement.classList.add('card');
  newElement.innerHTML = '<i class="fa fa-' + randomCards[i] + '"></i>';
  fragment.appendChild(newElement);
}
deck.appendChild(fragment);





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Array for the 2 selected cards
let openCards = [];

// Variable holding all cards
const allCards = document.querySelectorAll('li.card');

// Move counter
let moveCounter = 0;
let moveCounterDisplay = document.querySelector('.moves');
let movesWordDisplay = document.querySelector('.moves-word');
moveCounterDisplay.textContent = moveCounter;

// Match Counter
let matchCounter = 0;

// Game restart button
const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function() {
  allCards.forEach(function(element) {
    element.classList.remove('show');
    console.log(element);
  });
});


document.addEventListener('click', function(event) {
  if (event.target.className == "card") {
    moveCounter += 1;
    updateMoveCounter();
    toggleShow();
    addToOpenCards();
    if(openCards.length > 1) {
      if(openCards[0].innerHTML == openCards[1].innerHTML) {
        match();
        addStars();
        win();
      }
      else if (openCards.length > 2) {
        resetNotMatchedCards();
      }
    }
  }
});

// function increment moveCounter
function updateMoveCounter() {
  if (moveCounter == 1) {
    movesWordDisplay.textContent = 'Move';
    moveCounterDisplay.textContent = moveCounter;
  } else {
    movesWordDisplay.textContent = 'Moves';
    moveCounterDisplay.textContent = moveCounter;
  }
}


// function to toggle class show
function toggleShow() {
  event.target.classList.toggle('show');
}

// function to add value to array openCards
function addToOpenCards() {
  openCards.push(event.target)
}

// function match
function match() {
  openCards[0].classList.add('match');
  openCards[1].classList.add('match');
  openCards.pop();
  openCards.pop();
  matchCounter += 1;
}

// function add stars
function addStars() {
  const starsDisplay = document.querySelector('.stars');
  const newStar = "<li><i class='fa fa-star'></i></li>";
  starsDisplay.insertAdjacentHTML('beforeend', newStar);
}

// function to reset not Matched Cards
function resetNotMatchedCards() {
  openCards[0].classList.remove('show');
  openCards[1].classList.remove('show');
  openCards.splice(0, 2);
}


// function win
function win() {
  if (matchCounter == 8) {
    console.log('End of Game');
  }
}
