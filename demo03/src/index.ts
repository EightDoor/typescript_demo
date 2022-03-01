import { hi } from "./m1";

function sum(a: number, b: number): number {
  return a + b;
}

const a = sum(10, 20);
console.log(a);

console.log(hi);
const obj = { name: "test测试", age: 1 };
console.log(obj);

obj.age = 18;
console.log(obj);
console.log(Promise);

let fn = (a: number, b: number) => a + b;

fn(123, 456);
