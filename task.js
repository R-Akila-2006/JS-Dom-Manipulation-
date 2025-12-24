// select the element by using ID//
let a = document.getElementById("inputbox")
let b = document.getElementById("result")
function update(){
    b.textContent = a.value
}

// end//


let c = document.getElementById("btn")
let d = document.getElementById("title")
function add(){
    let e = document.createElement("h1")
    e.textContent = "HARRY POTTER"
    d.append(e)
    
}

//END//


// challenge 3 🎯
//      How can I crate an html button that,when clicked , trigger a javascript function, and change the button's color to red with each sucessive click?

let btn1 = document.getElementById("btn1")
function change(){
    btn1.style.backgroundColor="red";
}

    //  challenge 4 🎯
    //  How can I make it so that when a user clicks a button , the text from that button is showb in the h1 tag located above it //
let name = document.getElementById("name")
let ak = document.getElementById("ak")
let potter = document.getElementById("potter")
let harry = document.getElementById("Harry")

function first(){
    name.textContent = "Ak";
}
function second(){
    name.textContent = "Potter";
}
function third(){
    name.textContent = "Harry";
}

//End//

//Another way to create a this task //
let he = document.getElementById("con")
function update(event){
    //target is contains the content of the button like 'ak' 'potter' 'harry'
    he.textContent=event.target.textContent

}
//End //

//challenge 🎯-5//
let h1 = document.getElementById("one")
function deleteh1(){
    event.target.remove()
}