// function fn(a: number): number {
//   return a;
// }
/**
 * 定义函数或者是类时，如果遇到类型不明确就可以使用泛型
 *
 */

function fn<T>(a: T): T {
  return a;
}
// 可以直接调用具有泛型的函数

fn("hello world"); // 不指定泛型，ts可以自动堆类型进行推断
let result = fn<number>(3); //指定泛型
console.log(result);

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

// 泛型可以同时指定
fn2<number, string>(1, "2");

interface Inter {
  //
  length: number;
}

// T extends Inter 表示T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
  return a.length;
}

fn3("123");

class MyClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const r = new MyClass<string>("哈哈哈测试");
