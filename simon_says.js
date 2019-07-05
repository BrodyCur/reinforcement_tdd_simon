const echo = (word) => {
  return word;
};

const shout = (word) => {
  let capitalizeWord = word.toUpperCase();
  return capitalizeWord;
};

const repeat = (str, int) => {
  let repeatedStr = (str + ' ').repeat(int)
  return repeatedStr.trim();
};

const startOfWord = (string, int) => {
  let sub = string.substring(0, int);
  return sub;
};

const firstWord = (str) => {
  let strSplit = str.split(' ');
  return strSplit[0];
};

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
