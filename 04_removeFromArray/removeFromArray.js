const removeFromArray = function() {
    const args = Array.from(arguments);
    for(let j = 1; j < args.length; j++) {
        for(let i = 0; i < args[0].length; i++) {
            if(args[0][i] === args[j]) {
                args[0].splice(i, 1);
                i -= 1;
            }
        }
    }

    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
