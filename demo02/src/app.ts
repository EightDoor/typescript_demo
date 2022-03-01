let a = 10;

//这是一个注释 a = "hello"

let b = 20;

function fn(a: number, b: number) {
  return a + b;
}

function fn2(this: any) {
  alert(this);
}

let box1 = document.getElementById("box1");
if(box1) {
  box1.addEventListener('click', event => {
    alert("hello")
  });
}