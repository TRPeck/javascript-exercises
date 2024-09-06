const sumAll = function(x, y) {
    if(x < 0 || y < 0 || x % 1 != 0 || y % 1 != 0 || typeof(x) != "number" || typeof(y) != "number") {
        return "ERROR";
    }
    else {
        let sum = 0;
        if(x == y) {
            sum = x + y;
        }
        else if (x < y) {
            for(let i = x; i <= y; i++) {
                sum += i;
            }
        }
        else if (y < x) {
            for(let i = y; i <= x; i++) {
                sum += i;
            }
        }
    
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
