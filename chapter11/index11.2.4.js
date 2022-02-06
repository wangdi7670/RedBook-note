function delayResolve(str) {
    return new Promise((resolve, reject) => {
        console.log(str)

        setTimeout(() => {
            resolve()
        }, 1000)
    })
} 

delayResolve('p1')
    .then(() => delayResolve('p2'))
    .then(() => delayResolve('p3'))