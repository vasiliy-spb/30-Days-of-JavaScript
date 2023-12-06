/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {

    return Array.isArray(obj) ? reduceArray(obj) : reduceObject(obj);

    function reduceObject(obj) {
        for (el in obj) {
            if (!obj[el]) delete obj[el]
            if (Array.isArray(obj[el])) {
                obj[el] = reduceArray(obj[el]);
            } else if (typeof obj[el] == 'object') {
                obj[el] = reduceObject(obj[el]);
            }
        }
        return obj;
    }

    function reduceArray(arr) {
        let resultArr = [];
        arr.forEach(curr => {
            if (!curr) return;
            if (Array.isArray(curr)) {
                curr = reduceArray(curr);
            } else if (typeof curr == 'object') {
                curr = reduceObject(curr);
            }
            if (curr != null) {
                resultArr.push(curr);
            }
        })
        return resultArr;
    }

};

// obj = [null, 0, false, 1]
// console.log(compactObject(obj)) // [1]

// obj = {"a": null, "b": [false, 1]}
// console.log(compactObject(obj)) // {"b": [1]}

obj = [null, 0, 5, [0], [false, 16]]
console.log(compactObject(obj)) // [5, [], [16]]
