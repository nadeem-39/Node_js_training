// 1. Find the position of a card

let card = 2;
const getCardPosition = (deck, card) => {
  let idx = deck.findIndex((ele) => ele == card);
  console.log(idx);
  return idx;
};

getCardPosition([9, 7, 3, 2], card);

// 2. Determine if a card is present

card = 3;
const doesStackIncludeCard = (deck, card) => {
  let isPresent = deck.includes(card);
  console.log(isPresent);
  return isPresent;
};
doesStackIncludeCard([2, 3, 4, 5], card);

// 3. Determine if each card is even

const isEachCardEven = (deck) => {
  let isAllEven = deck.every((ele) => ele % 2 == 0);
  console.log(isAllEven);
  return isAllEven;
};

isEachCardEven([2, 4, 6, 7]);

// 4. Check if the stack contains an odd-value card

const doesStackIncludeOddCard = (deck) => {
  let isSomeOdd = deck.some((ele) => ele % 2 != 0);
  console.log(isSomeOdd);
  return isSomeOdd;
};

doesStackIncludeOddCard([3, 2, 6, 4, 8]);

//5. Get the first odd card from the stack

const getFirstOddCard = (deck) => {
  let oddValue = deck.find((ele) => ele % 2 != 0);
  console.log(oddValue);
  return oddValue;
};

getFirstOddCard([4, 2, 8, 7, 9]);

//6. Determine the position of the first card that is even
const getFirstEvenCardPosition = (deck) => {
  let evenPosition = deck.findIndex((ele) => ele % 2 == 0);
  console.log(evenPosition);
  return evenPosition;
};
getFirstEvenCardPosition([5, 2, 3, 1]);
