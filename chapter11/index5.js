let p2 = Promise.resolve('3')
console.log(p2)

console.log('-----------')

let p = new Promise((resolve, reject) => {resolve()})
console.log(p)
console.log(p === Promise.resolve(p))
console.log(p)  // Promise { <pending> }

try {
    throw new Error('foo')
} catch (e) {
    // console.log(e)
}
console.log('==================')


try {
    Promise.reject(new Error('dog'))
} catch (e) {
    // 这里的异常捕获不到
    console.log(e)
}