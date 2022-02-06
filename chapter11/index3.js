
async function foo() {
    let p = new Promise((resolve, reject) => {
        console.log(1)
        console.log(3)
        console.log(4)
        resolve('success')
        console.log(6)
        console.log(7)
    })
    
    console.log('hello')
    
    console.log(p)
    
    // await尝试'解包'对象的值
    console.log(await p)
}

foo()