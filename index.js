const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  // tutorials.map(string => {
  //  string.toLowerCase().split(' ').map(word => {
  //    (word.charAt(0).toUpperCase() + word.slice(1))
  //   }).join(' ')
  // })

  // tutorials.map(str => {
  //   str.split(' ')
  //   return str.map(word => {
  //     return word.charAt(0).toUpperCase()
  //   }).join(' ')
    
  // })

  tutorials.map(str => {
    return str.split(' ').toProperCase().join(' ')
  })
}

// function titleCased() {
//   tutorials.forEach(str => {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// })
// }

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};