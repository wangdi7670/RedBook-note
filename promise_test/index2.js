let p = new Promise(function (resolve, reject) {
    console.log(1)
    resolve('success')
    console.log(2)
})

p.then(() => {
    console.log(3)
})

console.log(4)