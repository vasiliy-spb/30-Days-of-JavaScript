/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe(ahotherVal) {
            if (ahotherVal === val) return true;      
            throw new Error('Not Equal');
        },
        notToBe(ahotherVal) {
            if (ahotherVal !== val) return true;
            throw new Error('Equal');
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
console.log(expect(5).notToBe(null));