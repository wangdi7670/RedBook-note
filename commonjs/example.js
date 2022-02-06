var x = 5;
var addX = function (value) {
    return value + x;
};

console.log('x =', x)
console.log('--------------')

const jquery = require('jquery');
exports.$ = jquery;
// console.log(module);

console.log(module.parent)
