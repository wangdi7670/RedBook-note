async function foo() {
   // await后面的任务会加入消息队列，只有后面的promise落定后才会执行
   const res = await new Promise(() => {
      console.log('啥都没有')
   })

   console.log('2')
}

foo()
console.log('1')
