var guests2 = ['Aslam', 'Ali ', 'Danish'];
console.log("".concat(guests2, "  are in list "));
var guestNotComing = guests2.splice(1, 1);
console.log(" =============== \n  ".concat(guestNotComing, " is not coming "));
console.log('New list for invitation is ');
guests2.splice(1, 0, 'Akbar');
console.log(guests2);
for (var i = 0; i < guests2.length; i++) {
    console.log("Hello Mr. ".concat(guests2[i], ", i would like to invite you for today's dinner. \n \t \tRegards Zeeshan Ali "));
}
