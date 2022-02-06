// 在终端中进入该文件夹下的目录 输入npm run test

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  console.log('--------------------')
});

test('自定义测试', () => {
  // console.log('hello, world!')
})