// ......................innerHTML ..........//


let a = document.getElementById("one")
console.log(a)
// it will print full div tag like
//  <div id="one">
//         <h1>Potter</h1>
//     </div>

// now print only the content //
console.log(a.textContent)
// it will print Potter//

// now use the innerHtml
console.log(a.innerHTML)
// The above line print the full h1 tah <h1>potter</h1>
// 👉 Use innerHTML when you need to insert HTML tags, and textContent when you want to display only plain text safely///

a.innerHTML = "Harry"
// change potter to Harry but now I use innerHtml//
a.innerHTML = "<h1>Harry potter</h1>"
// it will add the h1 tag inside the div so it display Harry potter but I am now use textContent //
a.textContent="<h1>Harry potter</h1>"
//it will print <h1>Harry potter</h1> like this //


// Different ways of selecting element //

//Select the element using class //
let b = document.querySelector("two")
console.log(b)
// it will print AK in display but in console it will show "null"//
// Because querySelector select the element using class , id and tag so we give "." for class//
let c = document.querySelector(".three")
console.log(c)

//using tag//
let d = document.querySelector("h2")
console.log(d)
// in this example it console the Hello h2 tag because js display the first h2 tag //
//querySelectorAll //

let e = document.querySelectorAll(".num")
console.log(e)
// it will print like NodeList//
// but I want only the "two " so use the index to console the element//

console.log(e[1])
// now I want all element using loop //
for(i=0;i<e.length;i++){
    console.log(e[i])
}
// now it print <h3 class="num">one</h3>
// <h3 class="num">two</h3>
// <h3 class="num">three</h3> // 
// now I want the content of the  all class//
for(i=0;i<e.length;i++){
    console.log(e[i].textContent)
}
//End//

//getElementsByClass//
let f = document.getElementsByClassName("four")
console.log(f[1].textContent)
// Access text content of the first element with class "four"//

// Selects all HTML elements that have the given class name
// Returns an HTMLCollection (array-like), so elements are accessed using index

//End//

//getElementsByIdName//
let g = document.getElementsByTagName("p")
function change(){
    g[0].style.backgroundColor = "red";
}
// Selects all HTML elements with the given tag name
// Returns an HTMLCollection, so index or loop is required

// prepend //
var div = document.getElementById("div")
div.append("Hello Harry")
div.prepend("Hey Ak.........")

//insertAdjacentElement //
var p = document.createElement("p")
p.textContent="bye"
div.insertAdjacentElement("afterend",p)

// insertAdjacebtElement 4 way to insert the element
// 1.afterbegin 
// 2.afterend
// 3.beforbegin
// 4.beforend
// insertAdjacentElement(position, ELEMENT)//



//End //
// Delete the element //

let o = document.getElementById("j")
function pot(){
    o.remove()
}
//End //

//...............Now is the Todo List📝........................ /////

let inp = document.getElementById("in")
let tak = document.getElementById("item")
let uli = document.getElementById("ulitem")
function add(){
    let harry = document.createElement("li")
    harry.innerHTML = inp.value + "<button onclick = 'dele(event)'>Delete</button>"
    uli.append(harry)
}
function dele(event){
    event.target.parentElement.remove()

   
}