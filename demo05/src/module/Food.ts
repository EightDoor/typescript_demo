// 定义食物类
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并且将其赋值给Element
    this.element = document.getElementById("food")!;
  }

  // 获取食物坐标 x
  get X() {
    return this.element.offsetLeft;
  }
  // 获取食物坐标Y
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物位置 最小0 最大290
    // 蛇移动一次就是一格，一格的大小就是10，所以要求食物的坐标必须是整10
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.top = top + "px";
    this.element.style.left = left + "px";
  }
}

export default Food;
