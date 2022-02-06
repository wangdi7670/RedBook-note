let p1 = Promise.reject('foo')
let p2 = p1.then((val) => {
    return 'success-' + val
}, (val) => {
    return 'fail-' + val
})

setTimeout(() => {console.log(p2)}, 500)
