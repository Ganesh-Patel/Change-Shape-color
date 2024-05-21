let circle=document.querySelector('.circle');
let shape=document.querySelector('#square');
let btn=document.querySelectorAll("button");
btn[0].addEventListener("click",changeColor);
btn[1].addEventListener("click",changeShape);

function randomColor (){
    let color=Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let newColor=`rgb(${randomColor ()},${randomColor ()},${randomColor ()})`;
    circle.style.backgroundColor = newColor;
}

function changeShape() {
    console.log(`change shape method is called `)
    let newid =randomShape();
    shape.id = newid;
}

let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];
function randomShape() {
    let idxx = Math.floor(Math.random() * arr.length);
    console.log(`new id is ${arr[idxx]}`)
    return arr[idxx];
}
