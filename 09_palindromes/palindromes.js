const palindromes = function () {
    const string = Array.from(arguments[0]);
    const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const noPuncArray = string.filter((ch) => validChars.includes(ch));
    const lowerCaseArray = noPuncArray.map((ch) => ch.toLowerCase());
    const original = [...lowerCaseArray];
    const reversed = lowerCaseArray.reverse();
    return original.every((value, index) => value === reversed[index]);
};

// Do not edit below this line
module.exports = palindromes;
