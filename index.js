let stage = 1;
let userScore = 0;
let maxRange = 3;
const userName = prompt("Enter your username: ") || "User";
let tries = 3;

const guessedNumber = (maxRange) => {
  return prompt(`Enter a number between the range of 1 - ${maxRange}: `);
};

while (tries !== 0) {
  tries--;
  let randomNumber = Math.floor(Math.random() * (maxRange - 1)) + 1;
  const guess = guessedNumber(maxRange);
  console.log(randomNumber);
  console.log(guess);

  if (guess == randomNumber) {
    stage++;
    userScore++;
    maxRange++;
    tries = 3;
    alert(
      `Hi ${userName}, you guessed right, and have qualified for stage ${stage}. user score: ${userScore}`
    );
  } else {
    console.log(`Wrong, try again. You have ${tries} trials left.`);
  }
}
console.log(`Total score: ${userScore}`);