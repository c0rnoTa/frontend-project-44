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

const getOperation = () => operations[getRandomNumber(operations.length)];

const getQuestion = () => `${getRandomNumber(maxValue)} ${getOperation()} ${getRandomNumber(maxValue)}`;
const getSolution = (question) => {
  const [a, operation, b] = question.split(' ');
  const calcutaionResult = calc(parseInt(a, 10), operation, parseInt(b, 10));
  return `${calcutaionResult}`;
};

export default () => playGame(rules, getQuestion, getSolution);
