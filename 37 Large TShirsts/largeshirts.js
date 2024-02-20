function make_shirt2(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    var new_message = "your size is " + size + ". and " + message + " is written on your shirt";
    return new_message;
}
console.log(make_shirt2());
console.log(make_shirt2("medium"));
console.log(make_shirt2("Extra Large", "your Shirt is too large "));
