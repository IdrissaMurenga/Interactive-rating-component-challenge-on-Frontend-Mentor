const submitBtn = document.querySelector("#submitBtn");
const num = document.querySelectorAll(".number")
const span = document.querySelector("#span")
const hero = document.querySelector(".hero")
const innerContainer = document.querySelector(".inner_container")


submitBtn.addEventListener("click",()=>{
    hero.classList.remove("hero");
    innerContainer.style.display = "none"
})
num.forEach((num)=>{
    num.addEventListener("click",()=>{
        num.style.backgroundColor = "#fb7413"
        span.textContent = num.textContent
    })
})

