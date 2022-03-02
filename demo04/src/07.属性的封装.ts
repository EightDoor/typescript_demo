(function () {
  // 定义一个表示人的类
  // ts中可以在属性前添加属性的修饰符
  /**
   * public 修饰的属性可以在任意位置访问(修改)。 默认值
   * private 私有属性，私有属性只能在类的内部进行访问(修改)
   *  - 通过在类中添加方法使得私有属性可以被外部访问
   * protected 受保护的树形，只能在当前类和当前类的子类中访问（修改）
   */
  class Person {
    private name: string;
    private age: number;

    private _other: string;
    constructor(name: string, age: number, other: string) {
      this.name = name;
      this.age = age;
      this._other = other;
    }

    // 定义方法，用来获取name属性
    getName() {
      return this.name;
    }

    // 定义方法，用来设置name属性
    setName(name: string) {
      this.name = name;
    }

    /**
     * get 方法读取属性
     * set 设置属性
     * 属性的存取器
     * @returns
     */

    getAge() {
      return this.age;
    }

    setAge(age: number) {
      if (age >= 0) {
        this.age = age;
      }
    }

    // ts中设置getter方法的方式
    get other() {
      return this._other;
    }

    // ts中设置setter方法的方式
    set other(val: string) {
      this._other = val;
    }
  }

  const per = new Person("哈哈", 20, "123");
  console.log(per);

  /**
   * 现在属性是对象中设置的，属性可以任意的被修改
   * 属性可以任意被修改将会导致对象中的数据变得非常的不安全
   */
  console.log(per.getName());
  per.setName("测试");
  per.setAge(30);
  console.log(per.getAge());

  per.other = "9999";
  console.log(per.other, "other");

  console.log(per);

  class A {
    private num: number;
    constructor(num: number) {
      this.num = num;
    }

    get num1() {
      return this.num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num1);
    }
  }

  const b = new B(1);

  class C {
    constructor(public name: string, public age: number) {}
  }

  const c = new C("测试", 123);
  console.log(c);
})();
