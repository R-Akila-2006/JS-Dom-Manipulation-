let pop = document.querySelector(".pop")
let over = document.querySelector(".over")
function show(){
    pop.style.display="block";
    over.style.display="block";
}

function closeup(){
     pop.style.display="none";
    over.style.display="none";
}
// End //

var Button = document.getElementById("btn") 

Button.addEventListener("click",function(){
    alert("Hey potter....")
    Button.style.backgroundColor="yellow";

})

Button.addEventListener("mouseover",function(){
    alert("HEY Ak")
})

