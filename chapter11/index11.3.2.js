
function delayResolve(str) {
    return new Promise((resolve, reject) => {
        console.log(str)

        setTimeout(() => {
            resolve('success')
        }, 1000)
    })
} 


async function foo() {
   const res = await delayResolve('hello')
   console.log(res)
}

foo()
console.log('hi')