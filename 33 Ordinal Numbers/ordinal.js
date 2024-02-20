var ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal.length; i++) {
    if (ordinal[i] == 1) {
        console.log(ordinal[i], 'st');
    }
    else if (ordinal[i] == 2) {
        console.log(ordinal[i], 'nd');
    }
    else if (ordinal[i] == 3) {
        console.log(ordinal[i], 'rd');
    }
    else {
        console.log(ordinal[i], 'th');
    }
}
