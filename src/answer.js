import readlineSync from 'readline-sync';

export const answer = () => {
  const ans = readlineSync.question('Your answer: ');
  return ans;
};