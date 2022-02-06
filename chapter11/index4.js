/* let p1 = new Promise((resolve, reject) => {
    resolve('hi')
})

setTimeout(() => {
    console.log(p1)
}, 0)

console.log('@', p1) */


/* new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('executor')
    }, 1000)
})

setTimeout(() => {
    console.log(1)
}, 500) */

let p = new Promise((resolve, reject) => {
    // setTimeout(reject, 1000)
    resolve('error')
})
console.log(p)

/* setTimeout(() => {
    console.log(p)
}, 2000) */