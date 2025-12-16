const score=200;
console.log(score);

const newScore=new Number(490) // it ensure that the input is always number
console.log(newScore);
console.log(newScore.toString().length); 
console.log(newScore.toFixed(2)); // it will return the two digit after decimal ,490.00

const number=5690.888
console.log(number.toPrecision(4)); // it focous on starting of four digit
const hundreds=100000000000000000000000000000
console.log(hundreds.toLocaleString('en-IN')); // seprate the zeros acoordidng to indian standrs
// ---------------------------maths--------------------------------------
console.log(Math);
console.log(Math.abs(-3)); // convert the -ve value to positive
console.log(Math.round(4.8));
console.log(Math.ceil(4.1)); // will take the upper value
console.log(Math.floor(4.9)); // will take the lower value);
console.log(Math.sqrt(36));
console.log(Math.pow(2,4));
console.log(Math.min(3,2,1,3,4,)); //will return the lower value
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);
// if we have to definr a paltiular miin or max
const min=10
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min);








