const fibonacci = function(num) {
    if(num < 0) { return "OOPS"; }
    else {
        const arr = [0, 1];
        for(let i = 2; i <= num; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
