// 使用class关键字来定义一个类

/**
 * 类中主要包含了两部分
 * 属性
 * 方法
 */
class Person {
  /**
   * 通过直接定义的属性为实例属性，需要通过对象的实例去访问
   *  const per = new Person()
   * per.name
   * 使用static 开头的属性是静态属性（类属性）,可以直接通过类去访问
   * Person.other
   *  readonly开头的属性表示一个只读的属性，无法修改
   */

  // 定义属性
  name = "hell";

  readonly age: number = 18;

  // 在属性之前添加static关键字可以定义类属性（静态属性）
  static readonly other: string = "其他的";

  // 定义方法
  /**
   * 如果方法以static开头就是类的静态方法,可以直接通过类去调用
   */
  // static sayHello() {
  //   console.log("hello 大家好");
  // }
  sayHello() {
    console.log("hello 大家好");
  }
}

const per = new Person();

console.log(per);

console.log(Person.other);

console.log(per.sayHello());
