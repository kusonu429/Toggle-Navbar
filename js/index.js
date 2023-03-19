
let active_menu = document.querySelector('.menu'); 
let lines1 = document.querySelector('.line1') 
let lines2 = document.querySelector('.line2') 
let lines3 = document.querySelector('.line3')  

let active_btn =document.querySelector('.icons')

 
active_btn.addEventListener('click' , function(){

    active_menu.classList.toggle("active")  
    lines1.classList.toggle("line-1")
    lines2.classList.toggle("line-2")
    lines3.classList.toggle("line-3") 
})
