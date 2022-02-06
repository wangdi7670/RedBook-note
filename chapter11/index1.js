
async function foo() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1)
            console.log(2)
            resolve('success')
            console.log(3)
            setTimeout()
        }, 1000)
    })
    
    // await暂停异步函数后面的代码, 等待
    console.log(await p)
    console.log('qwe')
}

foo()

// -------------------
function foo1() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1)
            console.log(2)
            resolve('success')
        }, 1000)
    })
    
    console.log(p)
}
// foo1()