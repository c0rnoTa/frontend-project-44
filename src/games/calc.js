import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 99;
const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calc = (a, operation, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log('unsupported operation');
      return null;
  }
};

const getRaundData = () => {
  const operation = operations[getRandomNumber(operations.length)];
  const a = getRandomNumber(maxValue);
  const b = getRandomNumber(maxValue);
  const question = `${a} ${operation} ${b}`;
  const solution = calc(a, operation, b);
  return [question, solution];
};

export default () => playGame(rules, getRaundData);
