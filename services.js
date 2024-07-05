const service = document.querySelector(".mid .Box .element .get ");
const xbtn = document.querySelector(".overlayshow .container i");
const show = document.querySelector(".overlayshow ");

service.addEventListener("click",() =>{
    document.querySelector("body").style.overflow = "hidden";
    show.classList.remove("hide");
 });

xbtn.addEventListener("click",() =>{
    document.querySelector("body").style.removeProperty("overflow")
    show.classList.add("hide");
 });

document.querySelectorAll(".counter span").forEach(valueDisplay => {
    let endValue = parseInt(valueDisplay.getAttribute("data-count"));
    let duration = Math.floor(5000 / endValue);
    let count = 0;
    let counter = setInterval(() => {
        valueDisplay.textContent = ++count;
        if (count === endValue) clearInterval(counter);
    }, duration);
});

const activePage = window.location.pathname.split('/').pop();
const navlinks = document.querySelectorAll(".navbar ul li a");
navlinks.forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add('active');
    }
});

