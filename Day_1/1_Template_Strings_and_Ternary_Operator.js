//1. Build an occasion sign

function buildSign(occasion, name) {
  let message = "";
  if (occasion === "Anniversary") {
    message = `Happy marriage ${occasion} ${name}`;
  } else message = `Happy ${occasion} ${name}`;
  console.log(message);
}

//2. Build a birthday sign

function buildBirthdaySign(age) {
  let message =
    age >= 50
      ? `Happy Birthday! What a mature fellow you are.`
      : `Happy Birthday! What a young fellow you are.`;
  console.log(message);
  return message;
}

// 3. Build a graduation sign

function graduationFor(name, year) {
  let message = `Congratulations ${name}! \nClass of ${year}`;
  console.log(message);
  return message;
}

//4. Compute the cost of a sign

function costOf(sign, currency) {
  let cost = 20 + sign.length * 2;
  let message = `Your sign costs ${cost}.00 ${currency}.`;
  console.log(message);
  return message;
}

//
function priceLabel(price, currency) {
  if (Number(price) === 0) {
    console.log("Its free");
  } else if (price <= 100) {
    console.log(`Price is ${price} ${currency}, cheap`);
  } else console.log(`Price is ${price} ${currency}, premium`);
}

// buildSign("Birthday", "Rob");
// buildBirthdaySign(45);
// graduationFor("Hannah", 2022);
// costOf("Happy Birthday Rob!", "dollars");
priceLabel("0", "inr");
