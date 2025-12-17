const name = "shadain"
const age = 18

console.log(`My name is ${name}, and I am ${age} years old.`)

// new way to declare a string
const gameName = new String('Pakdampakdai') // obejct bnake

console.log(gameName.__proto__);

console.log(gameName[4]);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase());
console.log(gameName.lastIndexOf('p'));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
console.log(gameName.substring(0,4)); // it will return the substring, last index is not included
console.log('----------------------------------------------------------------');

console.log(gameName.slice(0,4)); // last index is not included
console.log(gameName.slice(-4,-1)); //last index is not included it will slice it from backwards

const newGameName="         pubg           "
console.log(newGameName);
console.log(newGameName.trim()); // it will remove the spaces

console.log(newGameName.includes('g'));
const url= "http://localhost%20shadain"

console.log(url.replace('%20','-')); // replace

console.log(url.split('%20')); // split it by %20, convert it into  array













