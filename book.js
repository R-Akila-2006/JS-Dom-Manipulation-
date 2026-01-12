let but = document.querySelector(".btn")
let p = document.querySelector(".popup")
let o = document.querySelector(".over")

function show(){
    p.style.display="block";
    o.style.display="block";
    
}

var can = document.getElementById("popme")
can.addEventListener("click",function(event){
    event.preventDefault()
    p.style.display="none";
    o.style.display="none";

})


var cont = document.querySelector(".con")
var addb = document.getElementById("add")
var ip = document.getElementById("bt")
var pi = document.getElementById("Ba")
var bd = document.getElementById("bd")


addb.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-con")
    div.innerHTML=`  <h2>${bt.value}</h2>
            <h5>${Ba.value}</h5>
            <p>${bd.value}</p>
            <button onclick="dele(event)">Delete</button>`
            
    cont.append(div)

})

function dele(event){
    event.target.parentElement.remove();
}



