/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

arr = [0,10,20,30], 
fn = function greaterThan10(n) {
    let result = n > 10;
    console.log(n + ' n ' + result)
    return result; 
}

const newArray = filter(arr, fn);

console.log(newArray);