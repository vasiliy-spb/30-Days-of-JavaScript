/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function (fn) {
    // const result = {};
    // this.forEach(el => {
    //     let key = fn(el);
    //     if (!result.hasOwnProperty(key)) {
    //         result[key] = [];
    //     }
    //     result[key].push(el);
    // })
    // return result;

    // это решение у меня даёт верный результат, но проверку почему-то не проходит (output в проверке выводит {})
    // const result = new Map();
    // this.forEach(el => {
    //     let key = fn(el);
    //     if (!result.has(key)) {
    //         result.set(key, []);
    //     }
    //     result.get(key).push(el);
    // })
    // return result; // Map(2) { '1' => [ { id: '1' }, { id: '1' } ], '2' => [ { id: '2' } ] }

    // это решение у меня даёт верный результат и проходит проверку
    const result = new Map();
    this.forEach(el => {
        let key = fn(el);
        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key).push(el);
    })
    return Object.fromEntries(result.entries()); // { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// array = [
//     [1, 2, 3],
//     [1, 3, 5],
//     [1, 5, 9]
// ]
// fn = function (list) {
//     return String(list[0]);
// }

// console.log(array.groupBy(fn)) // { '1': [ [ 1, 2, 3 ], [ 1, 3, 5 ], [ 1, 5, 9 ] ] }

array = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
],
    fn = function (item) {
        return item.id;
    }

console.log(array.groupBy(fn)) // { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }

//$ ————————————————————————————

// tricks:

// оператор a ||= b устанавливает значение a = b, если Boolean(a) == false
Array.prototype.groupBy = function (fn) {
    const hash = {}
    for (let item of this) {
        const key = fn(item)
        hash[key] ||= []
        hash[key].push(item)
    }
    return hash
}
// from https://leetcode.com/problems/group-by/solutions/3407219/groupby-typescript-solution-o-n/
//
// Кажется для этих целей лучше использовать оператор нулевого присваивания ??=
// from https://learn.javascript.ru/nullish-operators
// Важное различие между ними заключается в том, что:
// —    || возвращает первое истинное значение.
// —    ?? возвращает первое определённое значение.


// перевод Map в Object
const map = new Map()
map.set(2, 3)
console.log(map) // Map(1) { 2 => 3 }
let o = Object.fromEntries(map.entries());
console.log(o) // { '2': 3 }
// from https://leetcode.com/problems/group-by/solutions/3406660/simple-solution-using-map/?envType=study-plan-v2&envId=30-days-of-javascript

