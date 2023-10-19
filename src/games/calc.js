import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 99;
const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getOperation = () => operations[getRandomNumber(operations.length)];

const getQuestion = () => `${getRandomNumber(maxValue)} ${getOperation()} ${getRandomNumber(maxValue)}`;
const getSolution = (question) => {
  const [a, operation, b] = question.split(' ');
  switch (operation) {
    case '+':
      return `${parseInt(a, 10) + parseInt(b, 10)}`;
    case '-':
      return `${parseInt(a, 10) - parseInt(b, 10)}`;
    case '*':
      return `${parseInt(a, 10) * parseInt(b, 10)}`;
    default:
      console.log('unsupported operation');
      return '';
  }
};

export default () => playGame(rules, getQuestion, getSolution);
