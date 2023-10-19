import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 99;
const rules = 'Find the greatest common divisor of given numbers.';

// Euclidean algorithm
const gcd = (a, b) => {
  // no-param-reassign linting
  let x = a;
  let y = b;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const getRaundData = () => {
  const a = getRandomNumber(maxValue);
  const b = getRandomNumber(maxValue);
  const question = `${a} ${b}`;
  const solution = `${gcd(a, b)}`;
  return [question, solution];
};

export default () => playGame(rules, getRaundData);
