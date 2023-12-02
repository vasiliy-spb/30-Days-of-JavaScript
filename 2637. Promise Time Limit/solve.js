/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {

        // trying 1
        // let start = performance.now();
        // let result = fn(...args);
        // let finish = performance.now();
        // if (finish - start <= t) {
        //     return result;
        // } else {
        //     return Error('Time Limit Exceeded');
        // }

        // trying 2
        // return new Promise( (resolve, reject) => {
        //     resolve(fn(...args));
        //     setTimeout(reject, t, Error('Time Limit Exceeded'));
        // })

        // trying 3
        // return new Promise( (resolve, reject) => {
        //     setTimeout(reject, t, Error('Time Limit Exceeded'));            
        //     let start = performance.now();
        //     let result = fn(...args);
        //     let finish = performance.now();
        //     if ((finish - start) <= t)
        //         resolve(result);
        // })

        // let resolvePromise = new Promise( (resolve) => {
        //     let result = fn(...args);
        //     resolve(result);
        // })
        // let rejectPromise = new Promise( (_r, reject) => {
        //     setTimeout(reject, t, Error('Time Limit Exceeded'))
        // })
        // return Promise.race([resolvePromise, rejectPromise]);

        // correct solve:
        return async function (...args) {

            let resolvePromise = new Promise((resolve) => {
                let result = fn(...args);
                resolve(result);
            })

            let rejectPromise = new Promise((_r, reject) => {
                let er = 'Time Limit Exceeded';
                setTimeout(reject, t, er)
            })

            return Promise.race([resolvePromise, rejectPromise]);
        }
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
