import playGame from '../index.js';

const maxValue = 99;
const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getNumber = () => Math.floor(Math.random() * maxValue);
const getOperation = () => operations[Math.floor(Math.random() * operations.length)];

const getQuestion = () => `${getNumber()} ${getOperation()} ${getNumber()}`;
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
