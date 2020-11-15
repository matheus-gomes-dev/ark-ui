import { random } from 'lodash';

const generatePassPhrase = (size = 9) => {

  const words = [
    'hockey',
    'sock',
    'tell',
    'luggage',
    'fog',
    'crush',
    'wild',
    'blood',
    'animal',
    'say',
    'turtle',
    'remove',
    'deer',
    'certain',
    'proof',
    'record',
    'uncle',
    'grass',
    'there',
    'apology',
    'lawsuit',
    'arrive',
    'mad',
    'task',
    'whale',
    'ask',
    'similar',
    'happy',
    'range',
    'green',
    'league',
    'fun',
    'crisp',
    'photo',
    'kiwi',
    'tell',
  ];

  const generateIndexes = (indexes = []) => {

    if (size > words.length / 2) return [];
    if (indexes.length === size) return indexes;

    const randomIndex = random(0, words.length - 1);
    if (indexes.includes(randomIndex)) {
      return generateIndexes(indexes);
    }

    return generateIndexes([...indexes, randomIndex]);
  };

  const wordsIndex = generateIndexes();
  const phrase = wordsIndex.map(index => words[index]);
  return phrase;
};

export default { generatePassPhrase };
