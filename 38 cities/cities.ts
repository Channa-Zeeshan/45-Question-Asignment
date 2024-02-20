function describe_city(city:string, coountry:string="Pakistan"){
    let result:string= city +' city is in '+coountry;
    return result
}


console.log(describe_city('Lahore'));
console.log(describe_city('Islamabad'));
console.log(describe_city('Mumbai',"India"));
