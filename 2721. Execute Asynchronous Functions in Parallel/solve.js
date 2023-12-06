/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */


var promiseAll = function (functions) {

    // return async (resolve, reject) => {

    //     let resultArray = new Array(functions.length);
    //     let countFinish = 0;
    //     functions.forEach(async (fn, index) => {
    //         try {
    //             let val = await fn();
    //             resultArray[index] = val;
    //             countFinish++;
    //             if (countFinish === functions.length)
    //                 resolve(resultArray);
    //         } catch (error) {
    //             reject(error)
    //         }
    //     })
    // }


    //$ ——— 

    // let result = [];
    // let error;
    // (async function () {
    //     try {
    //         const currRes = await fn();
    //         console.log(currRes)


    //         // for (let p of pArray) {
    //         //     const currRes = await fn();

    //         //     // let currRes = await fn().then(function (val) {
    //         //     //     console.log(val)
    //         //     //     // pArray.push(val)
    //         //     //     // console.log(pArray.length)
    //         //     //     // c = val;
    //         //     //     result.push(val);
    //         //     //     // console.log('line 26 = ' + c)
    //         //     //     // return c;
    //         //     // })
    //         //     //     .catch(er = error = er);
    //         //     console.log(currRes)
    //         //     // result.push(currRes)
    //         // }
    //     } catch (er) {
    //         return er;
    //     }
    // })().catch(er => error = er);

    // console.log(result)
    // return error ? error : result;

    //$ ——— 

    // let result = [];
    // let error;
    // for (let i = 0; i < functions.length; i++) {
    //     functions[i]().then(data => {
    //         console.log(data);
    //         result.push(data);
    //     })
    //     .catch(er => error = er);
    //     console.log(result.length)
    // }
    // return error ? error : result;

    // let error;
    return new Promise( (resolve, reject) => {
        let result = new Array(functions.length);
        let count = 0;
        functions.forEach(async (fn, ind) => {
            
            try {
                result[ind] = await fn();
                count++;
                if (count === functions.length)
                    resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    })
    // console.log(result)
    // return error ? error : result;

};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const promise = promiseAll([() => new Promise(res => res(42))])
console.log(promise)


// let promiseArray = []
// for (let i = 1; i <= 10; i++) {
//     promiseArray.push(new Promise((resolve) => {
//         setTimeout(resolve, i * 300, `promise ${i}`)
//     }))
// }

// let res = [];
// for (let prom of promiseArray) {
//     prom.then(data => {
//         console.log('data = ' + data);
//         res.push(data);
//     })
//         .catch(error => new Error(error));
// }

// let resultPromise = new Promise((resolve) => {

//     let res =[];

//     let fn = () => {
//         for( prom of promiseArray) {
//             prom.then(data => {
//                 console.log('data = ' + data);
//                 res.push(data);
//             })
//                 .catch(error => new Error(error));
//         }
//         console.log(res)
//         resolve(res)
//         // return res;
//     }

//     fn()
// })
// .then(value => console.log('resultPromise = ' + value + '\nend'), reason => console.log(reason))

// console.log('resultPromise = ' + resultPromise)




// console.log(res)

// promise.then(console.log); // [42]


// Promise.all()