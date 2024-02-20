var ageOfPerson = 15;
if (ageOfPerson <= 2 && ageOfPerson > 0) {
    console.log(" Person is Baby ");
}
else if (ageOfPerson > 2 && ageOfPerson < 4) {
    console.log(" Person is Toddler ");
}
else if (ageOfPerson >= 4 && ageOfPerson < 13) {
    console.log(" Person is kid ");
}
else if (ageOfPerson >= 13 && ageOfPerson < 20) {
    console.log(" Person is teenager ");
}
else if (ageOfPerson >= 20 && ageOfPerson < 65) {
    console.log(" Person is an Adult ");
}
else if (ageOfPerson >= 65) {
    console.log(" Person is older  ");
}
else {
    console.log("invalid number ");
}
