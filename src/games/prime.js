import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 10;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value <= 1) {
    return false;
  }
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const getRaundData = () => {
  const question = getRandomNumber(maxValue);
  const solution = isPrime(parseInt(question, 10)) ? 'yes' : 'no';

  return [question, solution];
};

export default () => playGame(rules, getRaundData);
