class Snake {
  // 表示蛇头的元素
  head: HTMLElement;
  // 表示蛇的身体(包括蛇头)
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.head = document.querySelector("#snake > div")!;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");

    this.element = document.getElementById("snake")!;
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft;
  }

  // 获取蛇的y轴坐标
  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.X === value) {
      return;
    }

    // X值得合法范围值 0 - 290
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了");
    }

    // 修改X时，是在修改水平坐标
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      // console.log("水平方向发生掉头");
      // 如果发生了掉头，让蛇反方向继续移动
      if (value > this.X) {
        // 向右移动,发生掉头，应该继续向左走
        value = this.X - 10;
      } else {
        // 向左走
        value = this.X + 10;
      }
    }
    // 移动身体
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody();
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    // Y值得合法范围值 0 - 290
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了");
    }

    // 修改Y时，是在修改水平坐标
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 如果发生了掉头，让蛇反方向继续移动
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }

  // 设置蛇增加身体
  addBody() {
    // 像element添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 设置蛇身体移动
  moveBody() {
    /**
     * 将后边身体的位置 设置为前边身体的位置
     */
    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }

  // 蛇头是否撞到身体了
  checkHeadBody() {
    // 获取所有的身体，检查是否蛇头坐标重叠
    for (let i = 1; i < this.bodies.length - 1; i++) {
      let db = this.bodies[i] as HTMLElement;
      if (this.X === db.offsetLeft && this.Y === db.offsetTop) {
        throw new Error("撞到自己了!");
      }
    }
  }
}

export default Snake;
