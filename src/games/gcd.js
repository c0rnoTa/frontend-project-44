import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 99;
const rules = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => `${getRandomNumber(maxValue)} ${getRandomNumber(maxValue)}`;
const getSolution = (question) => {
  const [strA, strB] = question.split(' ');
  let a = parseInt(strA, 10);
  let b = parseInt(strB, 10);
  // I'v googled Euclidean algorithm. Using 'for' is too much.
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return `${a + b}`;
};

export default () => playGame(rules, getQuestion, getSolution);
