var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var world = ['italy', 'Turkey', 'Africa', 'England', 'Pakistan', 'India'];
console.log("orignal Array is :", world);
console.log("sorted Array is :", __spreadArray([], world, true).sort());
console.log("orignal Array is :", world);
console.log("revrse Sorted Array is :", __spreadArray([], world, true).sort().reverse());
console.log("orignal Array is :", world);
console.log("reverse Array is :", world.reverse());
console.log("after again reverse become orignal Array is :", world.reverse());
console.log("sorted orignal Array is :", world.sort());
console.log("sorted reverse Array is :", world.sort().reverse());
