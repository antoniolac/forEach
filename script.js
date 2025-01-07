let div1 = document.querySelectorAll(".greenBg");
let div2 = document.querySelectorAll(".yellowBg");

for(let i = 0; i < div1.length; i++){
    div1[i].addEventListener("click", function(event){
        event.currentTarget.classList.remove("greenBg");
        event.currentTarget.classList.add("yellowBg");
    })  
}

for(let i = 0; i < div2.length; i++){
    div2[i].addEventListener("click", function(event){
        event.currentTarget.classList.remove("yellowBg");
        event.currentTarget.classList.add("greenBg");
    })  
}