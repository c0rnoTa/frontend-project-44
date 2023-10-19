import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const maxValue = 1000;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestion = () => getRandomNumber(maxValue);
const getSolution = (question) => ((question % 2 === 0) ? 'yes' : 'no');

export default () => playGame(rules, getQuestion, getSolution);
