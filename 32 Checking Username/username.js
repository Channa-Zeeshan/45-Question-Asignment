var current_users = ['Zeeshan', 'Nauman', 'Arsalan', 'Junaid', 'Shahzeb'];
var new_users = ['Jahanzeb', 'Sunny', 'Arsalan', 'Shahzeb', 'Dua'];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("".concat(new_users[i], " username already exist try a new username "));
    }
    else {
        console.log("".concat(new_users[i], " username is available  "));
    }
}
