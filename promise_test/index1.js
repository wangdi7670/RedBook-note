
function timeout(ms) {
    return new Promise((resolve, reject) => {
        console.log('执行了啊')
        setTimeout(resolve, ms, 'done');
    });
}
  
timeout(1000).then((value) => {
    console.log(value);
    console.log(value + 'a');
});

/* function test_setTimeout() {
    console.log('1s后输出')
    setTimeout((value) => {
        console.log('value = ', value)
    }, 1000, '测试setTimeout')
}

test_setTimeout() */