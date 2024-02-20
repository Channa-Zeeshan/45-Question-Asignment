var str = 'monday';
var str1 = 'Monday';
var str2 = 'tuesday';
var str3 = 'monday';
console.log(str == str3, "predicted true for equality");
console.log(str == str2, "predicted false for inequality");
console.log(str != str2, "predicted true for inequality");
console.log(str == str1, "predicted false for lowercase ");
var num1 = 18;
var num2 = 25;
var num3 = 20;
console.log("===========numbers ==============");
console.log(num1 == num2, " predicted false for equal");
console.log(num1 != num2, " predicted true for not equal");
console.log(num1 > num2, " predicted false for greater than ");
console.log(num1 < num2, " predicted true for less than ");
console.log(num1 >= num2, " predicted false for greater than and equal to ");
console.log(num1 <= num2, " predicted true for less than and equal to  ");
console.log("===========And , Or Operators ==============");
console.log((num1 > num3 && num2 > num3), "  and operator  pridiction is false ");
console.log((num1 > num3 || num2 > num3), "  OR operator  pridiction is true ");
var countries = ['pakistan', 'nepal', 'india', 'afghanistan'];
var countryname = "pakistan";
if (countries.includes(countryname)) {
    console.log("".concat(countryname, " is in array "));
}
else {
    console.log("".concat(countryname, " is not in array "));
}
var countryname2 = "america";
if (countries.includes(countryname2)) {
    console.log("".concat(countryname2, " is in array "));
}
else {
    console.log("".concat(countryname2, " is not in array "));
}
