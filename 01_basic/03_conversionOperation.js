let name="shadain"
console.log(typeof (name)
);
let stringInNumber=Number(name)
console.log(typeof(stringInNumber)); // conversion string to number
let age=13
let NumberInString=String(age)
console.log( typeof NumberInString);  // number to string

//if we pass a mix number it will be returned NaN
let batch="a2343"
let valueInNumber=Number(batch)
console.log(typeof (valueInNumber))
console.log(valueInNumber); // it will return a NaN
// if we pass null it will be returned 0
// if we pass undefined it will be returned NaN
// if we pass boolean it will be returned 0 OR 1


