/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {

    let p = new Promise( (resolve, reject) => {
        setTimeout( resolve, millis)
    } );
    return p;

}

// or

async function sleep(millis) {
    return new Promise( (resolve) => {
        setTimeout( resolve, millis)
    } );
}

// or

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));

}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


