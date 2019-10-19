import readlineSync from 'readline-sync';

export default () => {
  const ans = readlineSync.question('Your answer: ');
  return ans;
};
