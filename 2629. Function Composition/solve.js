/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	// return function(x) {
    //     for (let i = functions.length - 1; i >= 0; i--) {
    //         x = functions[i](x);
    //     }
    //     return x;
    // }

    // or

    if (functions.length == 0) {
        // console.log('x = ' + x);
        // console.log('length = ' + functions.length);
        return;
    }
    
    return function(x) {
        // for (let i = functions.length - 1; i >= 0; i--) {
        //     x = functions[i](x);
        // }
        // return x;

        // or
        // console.log('function working..')
        // console.log('length = ' + functions.length);
        x = functions.pop(x);
        return compose(functions);

        // return functions.pop(x);
    }

};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 2 * x]);
// const fn = compose([x => x + 1, x => 2 * x, x => x - 40]);
console.log(fn(4)); // 9

