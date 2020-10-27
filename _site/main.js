let Phrase = require("bsmith-palindrome");

let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string);

if (phrase.isPalindrome()) {
  alert(`${phrase.content} is a palindrome!`);
} else {
  alert(`${phrase.content} is not a palindrome.`);
}
