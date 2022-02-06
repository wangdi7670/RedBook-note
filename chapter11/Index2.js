let p = new Promise((resolve, reject) => {
    console.log(1)
    console.log(2)
    resolve('success')
})

console.log(p)
console.log('哈哈')

p.then(() => {
    console.log('p的回调函数执行')
})

console.log('aaa')