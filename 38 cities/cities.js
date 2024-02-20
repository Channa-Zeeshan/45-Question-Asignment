function describe_city(city, coountry) {
    if (coountry === void 0) { coountry = "Pakistan"; }
    var result = city + ' city is in ' + coountry;
    return result;
}
console.log(describe_city('Lahore'));
console.log(describe_city('Islamabad'));
console.log(describe_city('Mumbai', "India"));
