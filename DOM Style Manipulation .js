// <!-- change the background color of div -->//
let color = document.getElementById("con")
function change(){
    color.style.backgroundColor="red";
}

// challenge 🎯1 : Increase Text Size 
//       1.Create a paragraph
//      2.Create a button
    //  3. On button click → increase font size //

let p = document.getElementById("para")
function text_size(){
    p.style.fontSize="100px";
}

// challenge 🎯2 :  Click Counter with Color Change 
//      1.Create a button
//      2.Each click → count increases
//      3.If count is even → green
//      4.If odd → red//

let count = Math.floor(Math.random()*10)
console.log(count)
let butt = document.getElementById("btn2")
function Counter(){
    if(count%2==0){
        butt.style.backgroundColor="green"

    }
    else{
        butt.style.backgroundColor="red"
    }

}

// End //
