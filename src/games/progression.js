import playGame from '../index.js';
import getRandomNumber from '../utils.js';

// Progression constrains
const minLength = 5;
const maxLength = 10;
const maxStartValue = 20;
const maxIncrement = 10;

const rules = 'What number is missing in the progression?';
let missingValue = '';

const getQuestion = () => {
  const progressionSize = minLength + getRandomNumber(maxLength - minLength);
  const startValue = getRandomNumber(maxStartValue);
  const increment = getRandomNumber(maxIncrement);

  // Generate progression
  const progression = [];
  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(startValue + increment * i);
  }

  // Select value to remove but not the first one
  const index = getRandomNumber(progressionSize - 1) + 1;
  missingValue = progression[index];

  // Remove the value
  progression[index] = '..';

  return progression.join(' ');
};

const getSolution = () => `${missingValue}`;

export default () => playGame(rules, getQuestion, getSolution);
