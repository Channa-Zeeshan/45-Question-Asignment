var Username2 = ['Admin', 'Zeeshan', 'Nauman', 'Arsalan', 'Junaid'];
var name_of_user2 = "Zeeshan";
Username2.pop();
Username2.pop();
Username2.pop();
Username2.pop();
Username2.pop();
if (Username2.includes(name_of_user2)) {
    if (name_of_user2 == "Admin") {
        console.log("Hello ".concat(name_of_user2, ", Would you like to see status report"));
    }
    else {
        console.log("Hello ".concat(name_of_user2, ", Thankyou for logging in again"));
    }
}
else if (Username2 == null || Username2 == '') {
    console.log("username is empty");
}
console.log(Username2);
