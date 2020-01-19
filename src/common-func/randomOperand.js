import identity from './identity';

const randomNum = () => Math.random() * 10;

export default () => {
  let index = identity(randomNum());
  if (index < 4 || index === 0) {
    index = '+';
    return index;
  }
  if (index >= 4 && index < 7) {
    index = '-';
    return index;
  }
  if (index >= 7) {
    index = '*';
    return index;
  }
};
