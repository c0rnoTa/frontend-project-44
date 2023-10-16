import readlineSync from 'readline-sync';

const questionCount = 3;

let playerName = '';

const greeting = (rules = '') => {
  console.log('Welcome to the Brain Games!');

  playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);

  if (rules) {
    console.log(rules);
  }
};

const getAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

const sayCorrect = () => console.log('Correct!');

const sayWin = () => console.log(`Congratulations, ${playerName}!`);

const sayWrong = (answer, solution) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${playerName}!`);

export default (rules, getQuestion, getSolution) => {
  greeting(rules);

  for (let i = 0; i < questionCount; i += 1) {
    const question = getQuestion();
    const answer = getAnswer(question);
    const solution = getSolution(question);
    if (answer !== solution) {
      return sayWrong(answer, solution);
    }
    sayCorrect();
  }
  return sayWin();
};
