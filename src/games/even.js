import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 1000;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const getRaundData = () => {
  const question = getRandomNumber(maxValue);
  const solution = isEven(question);
  return [question, solution];
};

export default () => playGame(rules, getRaundData);
