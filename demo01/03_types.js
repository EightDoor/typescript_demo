// 也可以直接使用字面量类型声明
var a;
a = 10;
// 可以使用 | 来连接多个类型(联合类型)
var b;
b = 'male';
b = "false";
var c;
c = true;
c = "hello";
// any 表示任意类型,设置any，相当于对于该变量关闭了ts的类型检测
//使用ts时，不建议使用any类型
// let d: any;
//声明变量，不指定类型，则ts解析器会自动判断变量的类型为any（隐式any）
var d;
d = 10;
d = true;
d = "hello";
//unknown 表示未知类型
var e;
e = 10;
e = "hello";
e = true;
var s;
// d的类型是any，它可以赋值给任意变量
// s = d;
e = "hello";
//unknown 实际上就是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
/**
 *语法：
变量 as类型
<类型>变量
 */
if (typeof e === 'string') {
    s = e;
}
//类型断言 可以用来告诉解析器变量的实际类型
s = e;
s = e;
