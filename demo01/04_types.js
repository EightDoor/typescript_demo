//object表示一个js对象
var a;
a = {};
a = function () { };
//{} 用来指定对象中可以包含哪些属性
//语法:{属性名:属性值,属性名：属性值}
//在属性名后边加上?. 表示属性是可选的
var b;
b = { name: "1", age: 18 };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: "1", gender: "男" };
/**
 *设置函数结构的声明：
语法：(形参：类型，形参：类型，...)=>返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组的类型声明
 类型[]
 Array<类型>
 */
var e;
e = ['a', 'b', 'c'];
//number[]表示数值的值
var f;
f = [1];
var g;
g = [1, 2, 3];
/**
 *元组，元组就是固定长度的数组
语法:[类型，类型，...]
 */
var h;
h = ["hello", "abc"];
/**
 *enum枚举

 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = { name: "1", gender: Gender.Male };
