// select the element using id"//
console.log(document.getElementById("he"))
// it print like <h1 id="he">HELLO POTTER</h1>
// now create a variale called 'a' that store the getElementById //
var a = document.getElementById("he")
console.log(a)
// it also print like this "<h1 id="he">HELLO POTTER</h1>"//
// But I want only the content "HELLO POTTER" so I use textContent 
console.log(a.textContent)
// I change the content also  now I change HELLO POTTER  TO BYE POTTER//
a.textContent = "BYE POTTER"
// now I print //
console.log(a.textContent)

// 🎯challenge - 1//
//1. creating h1 tag with ID "title" and set its value to HELLO WORLD"//
//2 . Selexxt the h1 tag using document.getElementById and change "hello world " to "Bye world"//
var b = document.getElementById("one")
console.log(b.textContent)
b.textContent = "Bye World"
