let p1 = Promise.resolve('foo')
let p2 = p1.then(() => {
    return 'aaa'
})

console.log('@', p2)

setTimeout(() => {
    console.log(p2)
}, 0)
