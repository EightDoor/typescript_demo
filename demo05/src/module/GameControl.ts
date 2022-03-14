// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;

  // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
  direction = "";
  // 创建一个属性用来记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);
    this.init();
  }

  // 游戏的初始化方法，调用后游戏开始初始化
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // 调用run，使蛇移动
    this.run();
  }

  // 创建键盘按下事件
  keydownHandler(event: KeyboardEvent) {
    // 检查event.key的值是否合法(用户是否按了正确的按键)
    this.direction = event.key;
  }

  // 创建一个控制蛇移动的方法
  run() {
    // 根据方向来使蛇的位置改变
    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      // 向上
      case "ArrowUp":
        Y -= 10;
        break;
      // 向下
      case "ArrowDown":
        Y += 10;
        break;
      // 向左
      case "ArrowLeft":
        X -= 10;
        break;
      // 向右
      case "ArrowRight":
        X += 10;
        break;
    }

    // 检查蛇是否迟到食物
    this.checkEat(X, Y);
    // 修改蛇的X,Y值
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (err: any) {
      console.log(err);
      this.isLive = false;
      alert(err.message + "Game over!");
    }
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物改变
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 增加一节
      this.snake.addBody();
    }
  }
}

export default GameControl;
