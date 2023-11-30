/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
	return function(...args){
        let lastFn = fn(...args);
        fn = () => {};
        return lastFn;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)

 onceFn(1,2,3); // 6
 onceFn(2,3,6); // returns undefined without calling fn