var guests4 = ['Aslam', 'Ali ', 'Danish'];
console.log("".concat(guests4, "  are in list "));
var guestNotComing3 = guests4.splice(1, 1);
console.log(" =============== \n  ".concat(guestNotComing3, " is not coming "));
console.log('New list for invitation is ');
guests4.splice(1, 0, 'Akbar');
console.log(guests4);
console.log("========== I FOUND A BIGGER TABLE ==========");
console.log("let's make a new list for more guests ");
guests4.unshift('Nauman'); // add element at start 
guests4.splice(2, 0, "Arsalan Ali"); // add element at index 2
guests4.push('Junaid Ali '); // Add element in last 
console.log(guests4);
console.log(" Guest are not on time Now we have now 2 spots left only");
while (guests4.length > 2) {
    var removedname = guests4.pop();
    console.log("".concat(removedname, " is not invited for dinner"));
}
for (var i = 0; i < guests4.length; i++) {
    console.log("".concat(guests4[i], " is  invited for dinner, he  can enjoy  meal "));
}
console.log("remaining lis is ", guests4);
guests4.splice(0, 2);
console.log("both guest have done their dinner and now they've gone. and theres is no one at the list now ", guests4);
