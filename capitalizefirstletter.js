var str = 'How can mirrors be real if our eyes arent real';

var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

var capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');

console.log(capitalizeWords(str));