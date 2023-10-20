import readlineSync from 'readline-sync';

const questionCount = 3;

const greeting = (rules = '') => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);
  console.log(rules);

  return playerName;
};

export default (rules, getRaundData) => {
  const playerName = greeting(rules);

  for (let i = 0; i < questionCount; i += 1) {
    let raundData = null;
    try {
      raundData = getRaundData();
    } catch (e) {
      return console.error(e);
    }
    const question = raundData[0];
    const solution = raundData[1];

    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== solution) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${playerName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};
