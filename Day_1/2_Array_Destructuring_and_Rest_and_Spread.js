let deck = [5, 9, 7, 1, 8];

// First
const getFirstCard = (deck) => {
  let [firstCard] = deck;
  console.log(firstCard);
};

// getFirstCard(deck);

// Second question
const getSecondCard = (deck) => {
  let [first, second] = deck;
  console.log(second);
};

deck = [3, 2, 10, 6, 7];
// getSecondCard(deck);

// Third Question
deck = [10, 7, 3, 8, 5];
const swapTopTwoCards = (deck) => {
  const [firstCard, secondCard, ...rest] = deck;
  deck = [secondCard, firstCard, ...rest];
  console.log(deck);
};
// swapTopTwoCards(deck);

// Fourth Question
deck = [2, 5, 4, 9, 3];

const discardTopCard = (deck) => {
  const [firstCard, ...rest] = deck;

  finalDeck = [firstCard, rest];
  console.log(finalDeck);
};

// discardTopCard(deck);

//Fifth question
// deck = [5, 4, 7, 10];

const insertFaceCards = (deck) => {
  const newValues = ["jack", "queen", "king"];
  const [firstCard, ...rest] = deck;
  // const newDack = [...newValues, ...deck];
  const newDeck = [firstCard, ...newValues, ...rest];
  console.log(newDeck);
};

// insertFaceCards(deck);

// Create an array of ocassion and name, and another array of
// person name and age and run it in a loop and print their name,
// greetings and the message accoding to their age.

const ocassion_name = [
  ["Nadeem", "Birthday"],
  ["Nitin", "xyz"],
];
const person_name_age = [
  ["Nadeem", 23],
  ["Nitin", 40],
];

// function greetings_today(ocassion_name, person_name_age) {
//   for (let i = 0; i < ocassion_name.length; i++) {
//     let [name1, ocassion] = ocassion_name[i];
//     let data = person_name_age.filter((e) => {
//       let [name, age] = e;
//       if (name == name1) return true;
//       else return false;
//     });
//     let [name2, age] = data[0];
//     age > 35
//       ? console.log(`Happy ${ocassion} ${name1}, what a Young you are`)
//       : console.log(`Happy ${ocassion} ${name1}, what a mature you are`);
//   }
// }

function greetings_today(ocassion_name, person_name_age) {
  for (let i = 0; i < ocassion_name.length; i++) {
    let [name1, ocassion] = ocassion_name[i];
    let data = person_name_age.find((e) => {
      let [name, age] = e;
      if (name === name1) return true;
      else return false;
    });

    // let [name2, age] = data;
    let age = data[1];
    age < 35
      ? console.log(`Happy ${ocassion} ${name1}, what a Young you are`)
      : console.log(`Happy ${ocassion} ${name1}, what a mature you are`);
  }
}

greetings_today(ocassion_name, person_name_age);

// 2. Insert Face Card at alternate places i.e. number, face card, number, face card

deck = [5, 4, 7, 4, 6, 7, 8];
const insertFaceCards_today = (deck) => {
  const newValues = ["jack", "queen", "king"];
  const newDeck = [];
  let i = 0;
  let deckIdx = 0;
  let newValuesIdx = 0;

  while (deck.length > i || newValues.length > i) {
    // if (deckIdx >= deck.length) deckIdx = 0;
    // if (newValuesIdx >= newValues.length) newValuesIdx = 0;

    deckIdx = deckIdx % deck.length;
    newValuesIdx = newValuesIdx % newValues.length;

    newDeck.push(deck[deckIdx++]);
    newDeck.push(newValues[newValuesIdx++]);
    i++;
  }

  console.log(newDeck);
};

insertFaceCards_today(deck);
