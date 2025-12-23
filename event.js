//“Whenever I make changes and click the button, I want it to change from ‘Hello World ’ to ‘Bye World’ every time.”//
console.log(document.getElementById("one"))
var a = document.getElementById("one")

function change(){
    a.textContent = "Bye World"

}
// onmouseover//
console.log(document.getElementById("two"))
var b= document.getElementById("two")
function mouse(){
    b.textContent = "POTTER"
}
// 🎯 challenge -1//
//1.create 2 input box with id 'n1' and 'n2'//
//2. on a button click take the two values from both the boxes and store it in a varible called "total"//
//3 .create a p tag with id 'result' . Everytime user click add button the added result should be displayed in p tag//
var b1 = document.getElementById("n1")
var b2= document.getElementById("n2")
var sum = document.getElementById("total")
var re = document.getElementById("result")

//In this, don’t use textContent. Use value instead.”//
var valu1 = Number(b1.value)
var valu2 = Number(b2.value)
var to = valu1 + valu2
console.log(to)
// now it print '35' but I want 8//
// using Number() function it used to convert string to number//
function add(){
    var valu1 = Number(b1.value)
    var valu2 = Number(b2.value)
    var to = valu1 + valu2
    console.log(to)
    re.textContent = to
}
// Random number // 

// Math.random() function create 0.0 t0 0.9//
let ra = Math.random()
console.log(ra);

// Math.floor()
var fl = Math.floor(0.8934);
console.log(fl)
// this print 0 because it take the before "."//
var f2 = Math.floor(7.89)
console.log(f2)
// It print 7 //

// Now I want 1 10 10 randam number//
var f3 = Math.random()
console.log(Math.floor(f3*10)+1);

// Number gussing Game //
//🎯 challenge -1//
let r = document.getElementById("ran");
let me = document.getElementById("mess");
let guess = Math.floor(Math.random()*10)
let s = document.getElementById("sco")
var total = 10

function check(){
    var invalue = r.value
    if(guess == invalue){
        console.log("Right")
        me.textContent = "Right"
        alert("you won 🥇")
    }
    else{
        me.textContent ="Wrong"

        total=total-1
        s.textContent = "Score:"+total
    }
}











