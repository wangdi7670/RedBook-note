async function foo() {
    console.log(await new Promise((resolve, reject) => {
        console.log(1)
        console.log(2)
        resolve('success')
    }))

    console.log(3)
}

foo()
console.log('hi')
