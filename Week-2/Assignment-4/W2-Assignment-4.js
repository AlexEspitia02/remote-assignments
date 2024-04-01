let welcome=document.querySelector("#welcome");
let btn=document.querySelector("#btn");


welcome.addEventListener("click",()=>{
    welcome.textContent="Have a Good Time!"
})
btn.addEventListener("click",()=>{
    document.querySelector("#box").style.display="flex";
})