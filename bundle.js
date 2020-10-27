(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("bsmith-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.isPalindrome()) {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function (event) {
    palindromeTester(event);
  });
});

},{"bsmith-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Reverses a string
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

String.prototype.isBlank = function () {
  return !this.match(/\S+/);
};

Array.prototype.last = function () {
  return this.slice(-1)[0];
};

// Create Phrase object
function Phrase(content) {
  this.content = content;

  this.processedContent = function () {
    return this.letters().toLowerCase();
  };

  this.isPalindrome = function () {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  };

  this.letters = function () {
    const letterRegex = /[a-z]/gi;
    let t = this.content.match(letterRegex) || [];
    return t.join("");
  };
}

},{}]},{},[1]);
