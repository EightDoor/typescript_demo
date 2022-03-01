// 立即执行函数
(function () {
  // 定义一个Animal类
  /**
   * - 此时，Animal被称为父类，Dog被称为子类
   * - 使用继承后，子类将拥有父类所有的方法和属性
   * - 通过继承后可以将多个类中共有的代码写在一个父类中
   *   这个只需要写一次即可让所有的子类都同时拥有父类中的属性
   *   如果希望在子类中添加一些父类中没有的属性或者方法直接加就行
   * - 如果在子类中添加和父类相同的方法,那么子类方法将会覆盖父类的方法
   *   这种子类覆盖父类方法的形式，我们称为方法的重写
   */
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("动物叫 ~");
    }
  }
  // 定义一个狗的类
  // 使Dog类型继承Animal类
  class Dog extends Animal {
    run() {
      console.log(`${this.name} 在跑~`);
    }
    sayHello(): void {
      console.log("汪汪汪 ~");
    }
  }

  const dog = new Dog("旺财", 5);
  console.log(dog);

  dog.run();
  dog.sayHello();

  // 定义一个表示猫的类
  // 使Cat类型继承Animal类
  class Cat extends Animal {
    sayHello(): void {
      console.log("喵喵叫 ~");
    }
  }
  const cat = new Cat("旺财🐱", 20);
  console.log(cat);
  cat.sayHello();
})();
