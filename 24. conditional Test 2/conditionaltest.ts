let str:string='monday'
let str1:string='Monday'
let str2:string='tuesday'
let str3:string='monday'

console.log(str==str3, "predicted true for equality");
console.log(str==str2, "predicted false for inequality");
console.log(str!=str2, "predicted true for inequality");
console.log(str==str1,"predicted false for lowercase ");

let num1:number=18
let num2:number=25
let num3:number=20
console.log("===========numbers ==============");
console.log(num1==num2," predicted false for equal")
console.log(num1!=num2," predicted true for not equal");
console.log(num1> num2," predicted false for greater than ");
console.log(num1<  num2," predicted true for less than ");
console.log(num1>=num2," predicted false for greater than and equal to ");
console.log(num1<= num2," predicted true for less than and equal to  ");
console.log("===========And , Or Operators ==============");
console.log((num1 > num3 && num2> num3),"  and operator  pridiction is false ");
console.log((num1 > num3 || num2> num3),"  OR operator  pridiction is true ");

let countries:string[]=['pakistan', 'nepal', 'india','afghanistan']

let countryname:string="pakistan"

if(countries.includes (countryname)){
    console.log(`${countryname} is in array `);
    
}else{
    console.log(`${countryname} is not in array `);
}

let countryname2:string="america"

if(countries.includes (countryname2)){
    console.log(`${countryname2} is in array `);
    
}else{
    console.log(`${countryname2} is not in array `);
}








