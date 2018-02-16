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
let selectedCards = [];
// Variable to count fired click events
let eventCounter = 0;
// Variable holding all cards
const allCards = document.querySelectorAll('li.card');

// Event listener to add or remove symbol
document.addEventListener('click', play());

// function play
function play() {
  countFiredEvents();
  toggleSymbol();
  addToSelectedCards();
}



// count fired events
function countFiredEvents() {
  document.addEventListener('click', function(event) {
     if (event.target.classList == "card") {
      eventCounter += event.detail;
     }
  });
}

// Function to toggle show on click
function toggleSymbol () {
  document.addEventListener('click', function(event) {
    event.target.classList.toggle('show');
  });
}

// Function to add clicked card to Array selectedCards
function addToSelectedCards() {
  document.addEventListener('click', function(event) {
    selectedCards.push(event);
    console.log(selectedCards[0]);
  });
}



// Function to reset EventCounter after 2 clicked cards
// and removing class show from all cards
function resetEventCounter() {
  if (eventCounter == 2) {
    eventCounter = -1;
  } else if (eventCounter == 0) {
    removeShow(allCards);
  }
}

// Function: after 2 Array values clear array selectedCards
function clearSelectedCards() {
  if (selectedCards.length == 3) {
    selectedCards.pop();
    selectedCards.pop();
    selectedCards.pop();
  }
}



// remove on all cards show
function removeShow(array) {
  for(let i = 0; i < array.length; i++) {
    array[i].classList.remove('show');
  }
}

// add match
function addMatch(element) {
  element.classList.add('match');
}

// Check equality of selected cards
function checkMatch(array) {
  for(let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}
