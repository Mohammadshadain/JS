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


//********************************************* operations */
let str1="hello"
 let str2=" shadain"
 console.log(str1.concat(str2)); // it will concatenate two strings
 console.log( "1" + 23+2); // it behaves like string
 console.log(3+1+2 +"90"); // it behaves like number
 
 