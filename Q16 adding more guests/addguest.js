var guests3 = ['Aslam', 'Ali ', 'Danish'];
console.log("".concat(guests3, "  are in list "));
var guestNotComing2 = guests3.splice(1, 1);
console.log(" =============== \n  ".concat(guestNotComing2, " is not coming "));
console.log('New list for invitation is ');
guests3.splice(1, 0, 'Akbar');
console.log(guests3);
for (var i = 0; i < guests3.length; i++) {
    console.log("Hello Mr. ".concat(guests3[i], ", i would like to invite you for today's dinner. \n \t \tRegards Zeeshan Ali "));
}
console.log("========== I FOUND A BIGGER TABLE ==========");
console.log("let's make a new list for more guests ");
guests3.unshift('Nauman'); // add element at start 
guests3.splice(2, 0, "Arsalan Ali"); // add element at index 2
guests3.push('Junaid Ali '); // Add element in last 
console.log(guests3);
for (var i = 0; i < guests3.length; i++) {
    console.log("Hello Mr. ".concat(guests3[i], ", i would like to invite you for today's dinner. \n \t \tRegards Zeeshan Ali "));
}
