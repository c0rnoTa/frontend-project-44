import playGame from '../src/index.js';

// Progression constrains
const minLength = 5;
const maxLength = 10;
const maxStartValue = 20;
const maxIncrement = 10;

const rules = 'What number is missing in the progression?';
let missingValue = '';

const getRandom = (max) => Math.floor(Math.random() * max);

const getQuestion = () => {
  const progressionSize = minLength + getRandom(maxLength - minLength);
  const startValue = getRandom(maxStartValue);
  const increment = getRandom(maxIncrement);

  // Generate progression
  const progression = [];
  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(startValue + increment * i);
  }

  // Select value to remove but not the first one
  const index = getRandom(progressionSize - 1) + 1;
  missingValue = progression[index];

  // Remove the value
  progression[index] = '..';

  return progression.join(' ');
};

const getSolution = () => `${missingValue}`;

export default () => playGame(rules, getQuestion, getSolution);
