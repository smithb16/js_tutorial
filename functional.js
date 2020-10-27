let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(s) {
  return s.toLowerCase().split(/\s+/).join("-");
}

//Make example.com urls
function generateUrls(baseUrl, t, func = substituteUrl) {
  // returns array of urls, substituting each element
  // in 't' into the 'baseUrl' according to function 'func'
  // inputs:
  //   baseUrl: string
  //   t: array of elements to apply func to
  //   func: function to perform url-ification of baseUrl & t
  //
  // returns:
  //   array of url strings
  return t.map(function (s) {
    return func(baseUrl, s);
  });
}

function substituteUrl(baseUrl, s) {
  // split at $1 symbol and insert urlify version
  // of each element of s

  let [head, tail] = baseUrl.split("$1");
  return [head, urlify(s), tail].join("");
}

function imperativeSingles(t) {
  let singles = [];
  t.forEach((s) => {
    if (s.split(/\s+/).length === 1) {
      singles.push(s);
    }
  });
  return singles;
}

function functionalSingles(t) {
  return t.filter((s) => s.split(/\s+/).length === 1);
}

function dakotaFilter(t) {
  return t.filter((s) => s.toLowerCase().includes("dakota"));
}

function doublesFilter(t) {
  return t.filter((s) => s.split(/\s+/).length === 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(t) {
  let total = 0;
  t.forEach((n) => (total += n));
  return total;
}

function functionalSum(t) {
  return t.reduce((total, n) => {
    return (total += n);
  });
}

//lengths: imperative
function imperativeLengths(elements) {
  lengths = {};
  elements.forEach((element) => {
    lengths[element] = element.length;
  });
  return lengths;
}

//lengths: functional
function functionalLengths(elements) {
  return elements.reduce((lengths, state) => {
    lengths[state] = state.length;
    return lengths;
  }, {});
}

console.log(imperativeLengths(states));
console.log(functionalLengths(states));
