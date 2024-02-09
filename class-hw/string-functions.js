function isPalindrome(string) {
  const formattedString = string.toLowerCase().replaceAll(' ', '');

  return formattedString === formattedString.split('').reverse().join('');
}

console.log(`"Racecar" is palindrome? ${isPalindrome('Racecar')}`);
console.log(`"Hello" is palindrome? ${isPalindrome('Hello')}`);

function toUpperCase(string) {
  return string.toUpperCase();
}

console.log(toUpperCase('hello'));

function uniqueStrings(arr) {
  let uniqueArr = [];

  arr.forEach(str => {
    if (!uniqueArr.includes(str)) {
      uniqueArr.push(str);
    }
  });

  return uniqueArr;
}

const strings = ["apple", "banana", "orange", "apple", "grape", "banana"];
console.log(uniqueStrings(strings));

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let amPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  let formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + amPm;

  return formattedTime;
}

const now = new Date();
console.log(`Зараз ${formatTime(now)} година!`);
