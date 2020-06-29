var count = prompt("How many characters would like your password to contain? ");
var types = []
var result = "";

if (count < 8) {
    alert("Password length must be at least 8 characters");
} else if (count > 128) {
    alert("Password length must be less than 129 characters");
} else {
    var hasNum = confirm("Click OK to include numeric characters.");
    var hasLowerCase = confirm("Click OK to include lowercase characters.");
    var hasUpperCase = confirm("Click OK to include uppercase characters.");
    var hasSpecial = confirm("Click OK to include special characters.");
    /* Need a sanity check to make sure user did not choose false to all four char */
    if (!hasNum && !hasUpperCase && !hasLowerCase && !hasSpecial) {
        alert("Need to select at least one character type");
    }
}
/*using an array to store allowed type */
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

for (var i = 0; i < count; i ++) {
    /** Basic logic is: use one random number from 0..type - 1 for the type */
    var tIndex = Math.floor(Math.random() * types.length);
    var charType = types[tIndex];

    if (charType === "num") {
        /*numeric character in 0..9, since already using string concatenate, simply using random number for 0-9 */
        result += Math.floor(Math.random() * 10);
    } else if (charType === "lower") {
        /* lowercase letter are from 97 to 122 */
        var n = Math.floor(Math.random() * 26) + 97;
        result += String.fromCharCode(n);
    } else if (charType === "upper") {
        /* uppercase letter are from 65 to 90 */
        var n = Math.floor(Math.random() * 26) + 65;
        result += String.fromCharCode(n);
    } else {
        /* I did not include space here cuz i don't think space should be in password usually*/
        const specials =  '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'; 
        console.log(specials);
        var n = Math.floor(Math.random() * specials.length);
        result += specials.charAt(n);
    }
}

var resultEl = document.getElementById("result");
resultEl.textContent = result;
/* Only enable copy to clipboard button after the result is shown up */
var copyEl = document.getElementById("copyBtn");
if (result !== "") {
    copyEl.disabled = false;
}

/* only copy when the button is on click, so add event listener here */
copyEl.addEventListener('click', () => {
    resultEl.select();
    document.execCommand('copy');
    alert("You password '" + result + "' was copied");
})
