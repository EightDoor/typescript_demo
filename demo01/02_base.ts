
//声明一个变量a，同时指定它的类型
let a: number;

//a的类型设置为number,在以后的使用过程中a的值只能是数字
a = 10;

a = 20;

// 变量a的类型是number，不能赋值其他
// a = "hello"


let b: string;

b = "123"

//声明完直接赋值
let c = false;


// function sum(a, b) {
//   return a + b;
// }

// sum(123, 456);
// console.log(sum(123, "456"));


function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(123, 456);
console.log(result);

