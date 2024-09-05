const repeatString = function(str, n) {
    let repeatedStr = "";
    if(n < 0) {
        repeatedStr = "ERROR";
    }
    else {
        for(let i = 0; i < n; i++) {
            repeatedStr += str;
        }
    }

    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
