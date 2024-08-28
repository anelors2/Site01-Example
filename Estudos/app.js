const toTop= document.querySelector(".back-top")

window.addEventListener("scroll", () => {
    if(pageYOffset > 75){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})

const a1= document.querySelector(".a1")
const sidebar= document.querySelector(".links")
const links= document.querySelectorAll(".links li a")

a1.addEventListener("click", toggleSidebar)

links.forEach(link => {
    link.addEventListener("click", toggleSidebar)
})

function toggleSidebar(){
    sidebar.classList.toggle("show")
}