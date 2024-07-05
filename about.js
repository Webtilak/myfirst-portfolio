const activePage = window.location.pathname.split('/').pop();
const navlinks = document.querySelectorAll(".navbar ul li a");
navlinks.forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add('active');
    }
});


// Slider
const slidecontainer= document.querySelector(".slide-container");
const cardWrapper = document.querySelector(".card-wapper");
const arrowBtns = document.querySelectorAll(".slide-container i");
const firstcardwidth = cardWrapper.querySelector(".card").offsetWidth;
const cardWrapperChildern = [...cardWrapper.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardpreview = Math.round(cardWrapper.offsetWidth / firstcardwidth);

cardWrapperChildern.slice(-cardpreview).reverse().forEach(card => {
    cardWrapper.insertAdjacentElement("afterbegin", card.cloneNode(true));
});

cardWrapperChildern.slice(0 ,cardpreview).forEach(card =>{
    cardWrapper.insertAdjacentElement("beforeend", card.cloneNode(true));
});

arrowBtns.forEach(btn =>{
   btn.addEventListener("click",() =>{
     cardWrapper.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
   });
});

const dragStart = (e) => {
    isDragging = true;
    cardWrapper.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = cardWrapper.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    cardWrapper.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    cardWrapper.classList.remove("dragging");
}

const autoplay = () =>{
    if(window.innerWidth < 800) return;
    timeoutId = setTimeout( () => cardWrapper.scrollLeft += firstcardwidth, 2500);
}

autoplay();

const infiniteScroll = () => {
    if(cardWrapper.scrollLeft === 0){
        cardWrapper.classList.add("no-transition");
        cardWrapper.scrollLeft =cardWrapper.scrollWidth - (2 * cardWrapper.offsetWidth);
        cardWrapper.classList.remove("no-transition");
    }else if(Math.ceil(cardWrapper.scrollLeft) === cardWrapper.scrollWidth - cardWrapper.offsetWidth){
        cardWrapper.classList.add("no-transition");
        cardWrapper.scrollLeft = cardWrapper.offsetWidth;
        cardWrapper.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if(!slidecontainer.matches(":hover")) autoplay();
}


cardWrapper.addEventListener("mousedown", dragStart);
cardWrapper.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
cardWrapper.addEventListener("scroll", infiniteScroll);
slidecontainer.addEventListener("mouseenter", () => clearTimeout(timeoutId));
slidecontainer.addEventListener("mouseleave", autoplay);


//body
const service = document.querySelector(".get ");
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