(function () {
  // 定义一个表示人的类
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const per = new Person("哈哈", 20);
  console.log(per);

  /**
   * 现在属性是对象中设置的，属性可以任意的被修改
   *  属性可以任意被修改
   */
  per.name = "123";
  per.age = 33;
  console.log(per);
})();
