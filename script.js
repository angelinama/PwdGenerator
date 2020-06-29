var count = prompt("How many characters would like your password to contain? ");
var types = []
var result = "";

if (count < 8) {
    alert("Password length must be at least 8 characters");
} else if (count > 128) {
    alert("Password length must be less than 129 characters");
} else {
    var hasNum = confirm("Click OK to include numeric characters.");
    var hasUpperCase = confirm("Click OK to include lowercase characters.");
    var hasUpperCase = confirm("Click OK to include uppercase characters.");
    var hasSpecial = confirm("Click OK to include special characters.");
    /* Need a sanity check to make sure user did not choose false to all four char */
    if (!hasNum && !hasUpperCase && !hasUpperCase && !hasSpecial) {
        alert("Need to select at least one character type");
    }
}



if (hasNum) {
    types.push("num");
}
if (hasUpperCase) {
    types.push("upper");
}
if (hasLowerCase) {
    types.push("lower");
}
if (hasSpecial) {
    types.push("special");
}

// for (var i = 0; i < count; i ++) {
//     var charType; /* undefined */
//     /** Basic logic is: use one random number from 0..type - 1 for the type */
//     var tIndex = Math.floor(Math.random() * 4);
//     i

// }