import identity from './identity';

const randomNum = () => Math.random() * 10;

export default () => {
  let index = identity(randomNum());
  if (index < 4 || index === 0) {
    index = '+';
  } else if (index >= 4 && index < 7) {
    index = '-';
  } else {
    index = '*';
  }
  return index;
};
