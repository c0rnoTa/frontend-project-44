import playGame from '../engine.js';

const maxValue = 1000;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestion = () => Math.floor(Math.random() * maxValue);
const getSolution = (question) => ((question % 2 === 0) ? 'yes' : 'no');

export default () => playGame(rules, getQuestion, getSolution);
