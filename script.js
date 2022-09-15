const hamburger = document.querySelector(".hamburger")
const topLinks = document.querySelector(".top-links")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    topLinks.classList.toggle("active")
})

document.querySelectorAll(".top-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    topLinks.classList.remove("active");
}))