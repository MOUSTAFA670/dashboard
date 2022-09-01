let bar=document.getElementById("menu-btn")
let sideMenue=document.querySelector("aside")
let closeButton=document.getElementById("close-btn")
let toggler=document.getElementById("toggler")
console.log(closeButton);
console.log(toggler);
bar.addEventListener("click",()=>{
    sideMenue.style.display="block"
})


closeButton.addEventListener("click",()=>{
    sideMenue.style.display="none"
})


toggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-variables")
    toggler.querySelector("span:nth-child(1)").classList.toggle("active");
    toggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

