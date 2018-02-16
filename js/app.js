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

let selectedCards = [];
let selectedCard1 = "";
let selectedCard2 = "";
let eventCounter = 0;
const allCards = document.querySelectorAll('li.card');

// on click add or remove symbol
document.addEventListener('click', toggleSymbol());

// toggle show
function toggleSymbol () {
  document.addEventListener('click', function(event) {
    event.target.classList.toggle('show');
    selectedCards.push(event);
    // selectedCard1 = selectedCards[0].target.firstChildElement;
    // selectedCard2 = selectedCards[1].target.firstChildElement;
    countFiredEvents(event);
    resetEventCounter();
    // console.log(selectedCard1);
    // console.log(selectedCard2);

    // if(selectedCard1 == selectedCard2) {
    //   event.target.classList.add('match');
    // } else {
    //   console.log("nope");
    // }
  });
}


// Reset EventCounter after 2 clicked cards
function resetEventCounter() {
  if (eventCounter == 2) {
    eventCounter = -1;
  } else if (eventCounter == 0) {
    removeShow(allCards);
  }
}

// count fired events
function countFiredEvents(event) {
  eventCounter += event.detail;
  console.log(eventCounter);
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
