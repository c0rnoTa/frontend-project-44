import playGame from '../src/index.js';

const maxValue = 10;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value <= 0) {
    return false;
  }
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestion = () => Math.floor(Math.random() * maxValue);
const getSolution = (question) => (isPrime(parseInt(question, 10)) ? 'yes' : 'no');

export default () => playGame(rules, getQuestion, getSolution);
