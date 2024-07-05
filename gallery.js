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

//slider2
const slidecontainer2= document.querySelector(".third .slide-container");
const cardWrapper2 = document.querySelector(".third .card-wapper");
const arrowBtns2 = document.querySelectorAll(".third .slide-container i");
const firstcardwidth2 = cardWrapper2.querySelector(".third .card").offsetWidth;
const cardWrapperChildern2 = [...cardWrapper2.children];

let isDragging2 = false, startX2, startScrollLeft2, timeoutId2;

let cardpreview2 = Math.round(cardWrapper2.offsetWidth / firstcardwidth2);

cardWrapperChildern.slice(-cardpreview2).reverse().forEach(card => {
    cardWrapper2.insertAdjacentElement("afterbegin", card.cloneNode(true));
});

cardWrapperChildern.slice(0 ,cardpreview2).forEach(card =>{
    cardWrapper2.insertAdjacentElement("beforeend", card.cloneNode(true));
});



arrowBtns2.forEach(btn =>{
    btn.addEventListener("click",() =>{
      cardWrapper2.scrollLeft += btn.id === "left" ? -firstcardwidth2 : firstcardwidth2;
    });
 });


const dragStart2 = (e) => {
    isDragging2 = true;
    cardWrapper2.classList.add("dragging");
    startX2 = e.pageX;
    startScrollLeft2 = cardWrapper2.scrollLeft;
}

const dragging2 = (e) => {
    if (!isDragging2) return;
    cardWrapper2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    cardWrapper2.classList.remove("dragging");
}

const autoplay2 = () =>{
    if(window.innerWidth < 800) return;
    timeoutId2 = setTimeout( () => cardWrapper2.scrollLeft += firstcardwidth2, 2500);
}

autoplay2();

const infiniteScroll2 = () => {
    if(cardWrapper2.scrollLeft === 0){
        cardWrapper2.classList.add("no-transition");
        cardWrapper2.scrollLeft =cardWrapper2.scrollWidth - (2 * cardWrapper2.offsetWidth);
        cardWrapper2.classList.remove("no-transition");
    }else if(Math.ceil(cardWrapper2.scrollLeft) === cardWrapper2.scrollWidth - cardWrapper2.offsetWidth){
        cardWrapper2.classList.add("no-transition");
        cardWrapper2.scrollLeft = cardWrapper2.offsetWidth;
        cardWrapper2.classList.remove("no-transition");
    }

    clearTimeout(timeoutId2);
    if(!slidecontainer2.matches(":hover")) autoplay2();
}

cardWrapper2.addEventListener("mousedown", dragStart2);
cardWrapper2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
cardWrapper2.addEventListener("scroll", infiniteScroll2);
slidecontainer2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
slidecontainer2.addEventListener("mouseleave", autoplay2);


//slider3
const slidecontainer3= document.querySelector(".fourth .slide-container");
const cardWrapper3 = document.querySelector(".fourth .card-wapper");
const arrowBtns3 = document.querySelectorAll(".fourth .slide-container i");
const firstcardwidth3 = cardWrapper3.querySelector(".fourth .card").offsetWidth;
const cardWrapperChildern3 = [...cardWrapper3.children];

let isDragging3 = false, startX3, startScrollLeft3, timeoutId3;

let cardpreview3 = Math.round(cardWrapper3.offsetWidth / firstcardwidth3);

cardWrapperChildern3.slice(-cardpreview3).reverse().forEach(card => {
    cardWrapper3.insertAdjacentElement("afterbegin", card.cloneNode(true));
});

cardWrapperChildern3.slice(0 ,cardpreview3).forEach(card =>{
    cardWrapper3.insertAdjacentElement("beforeend", card.cloneNode(true));
});



arrowBtns3.forEach(btn =>{
    btn.addEventListener("click",() =>{
      cardWrapper3.scrollLeft += btn.id === "left" ? -firstcardwidth3 : firstcardwidth3;
    });
 });


const dragStart3 = (e) => {
    isDragging3 = true;
    cardWrapper3.classList.add("dragging");
    startX3 = e.pageX;
    startScrollLeft3 = cardWrapper3.scrollLeft;
}

const dragging3 = (e) => {
    if (!isDragging3) return;
    cardWrapper3.scrollLeft = startScrollLeft3 - (e.pageX - startX3);
}

const dragStop3 = () => {
    isDragging3 = false;
    cardWrapper3.classList.remove("dragging");
}

const autoplay3 = () =>{
    if(window.innerWidth < 800) return;
    timeoutId3 = setTimeout( () => cardWrapper3.scrollLeft += firstcardwidth3, 2500);
}

autoplay3();

const infiniteScroll3 = () => {
    if(cardWrapper3.scrollLeft === 0){
        cardWrapper3.classList.add("no-transition");
        cardWrapper3.scrollLeft =cardWrapper3.scrollWidth - (2 * cardWrapper3.offsetWidth);
        cardWrapper3.classList.remove("no-transition");
    }else if(Math.ceil(cardWrapper3.scrollLeft) === cardWrapper3.scrollWidth - cardWrapper3.offsetWidth){
        cardWrapper3.classList.add("no-transition");
        cardWrapper3.scrollLeft = cardWrapper3.offsetWidth;
        cardWrapper3.classList.remove("no-transition");
    }

    clearTimeout(timeoutId3);
    if(!slidecontainer3.matches(":hover")) autoplay3();
}

cardWrapper3.addEventListener("mousedown", dragStart3);
cardWrapper3.addEventListener("mousemove", dragging3);
document.addEventListener("mouseup", dragStop3);
cardWrapper3.addEventListener("scroll", infiniteScroll3);
slidecontainer3.addEventListener("mouseenter", () => clearTimeout(timeoutId3));
slidecontainer3.addEventListener("mouseleave", autoplay3);

//slider4
const slidecontainer4 = document.querySelector(".fifth .slide-container");
const cardWrapper4 = document.querySelector(".fifth .card-wapper");
const arrowBtns4 = document.querySelectorAll(".fifth .slide-container i");
const firstcardwidth4 = cardWrapper4.querySelector(".fifth .card").offsetWidth;
const cardWrapperChildern4 = [...cardWrapper4.children];

let isDragging4 = false, startX4, startScrollLeft4, timeoutId4;

let cardpreview4 = Math.round(cardWrapper4.offsetWidth / firstcardwidth4);

cardWrapperChildern4.slice(-cardpreview4).reverse().forEach(card => {
    cardWrapper4.insertAdjacentElement("afterbegin", card.cloneNode(true));
});

cardWrapperChildern4.slice(0, cardpreview4).forEach(card => {
    cardWrapper4.insertAdjacentElement("beforeend", card.cloneNode(true));
});

arrowBtns4.forEach(btn => {
    btn.addEventListener("click", () => {
        cardWrapper4.scrollLeft += btn.id === "left" ? -firstcardwidth4 : firstcardwidth4;
    });
});

const dragStart4 = (e) => {
    isDragging4 = true;
    cardWrapper4.classList.add("dragging");
    startX4 = e.pageX;
    startScrollLeft4 = cardWrapper4.scrollLeft;
}

const dragging4 = (e) => {
    if (!isDragging4) return;
    cardWrapper4.scrollLeft = startScrollLeft4 - (e.pageX - startX4);
}

const dragStop4 = () => {
    isDragging4 = false;
    cardWrapper4.classList.remove("dragging");
}

const autoplay4 = () => {
    if (window.innerWidth < 800) return;
    timeoutId4 = setTimeout(() => cardWrapper4.scrollLeft += firstcardwidth4, 2500);
}

autoplay4();

const infiniteScroll4 = () => {
    if (cardWrapper4.scrollLeft === 0) {
        cardWrapper4.classList.add("no-transition");
        cardWrapper4.scrollLeft = cardWrapper4.scrollWidth - (2 * cardWrapper4.offsetWidth);
        cardWrapper4.classList.remove("no-transition");
    } else if (Math.ceil(cardWrapper4.scrollLeft) === cardWrapper4.scrollWidth - cardWrapper4.offsetWidth) {
        cardWrapper4.classList.add("no-transition");
        cardWrapper4.scrollLeft = cardWrapper4.offsetWidth;
        cardWrapper4.classList.remove("no-transition");
    }

    clearTimeout(timeoutId4);
    if (!slidecontainer4.matches(":hover")) autoplay4();
}

cardWrapper4.addEventListener("mousedown", dragStart4);
cardWrapper4.addEventListener("mousemove", dragging4);
document.addEventListener("mouseup", dragStop4);
cardWrapper4.addEventListener("scroll", infiniteScroll4);
slidecontainer4.addEventListener("mouseenter", () => clearTimeout(timeoutId4));
slidecontainer4.addEventListener("mouseleave", autoplay4);

//slider5
const slidecontainer5 = document.querySelector(".six .slide-container");
const cardWrapper5 = document.querySelector(".six .card-wapper");
const arrowBtns5 = document.querySelectorAll(".six .slide-container i");
const firstcardwidth5 = cardWrapper5.querySelector(".six .card").offsetWidth;
const cardWrapperChildern5 = [...cardWrapper5.children];

let isDragging5 = false, startX5, startScrollLeft5, timeoutId5;

let cardpreview5 = Math.round(cardWrapper5.offsetWidth / firstcardwidth5);

cardWrapperChildern5.slice(-cardpreview5).reverse().forEach(card => {
    cardWrapper5.insertAdjacentElement("afterbegin", card.cloneNode(true));
});

cardWrapperChildern5.slice(0, cardpreview5).forEach(card => {
    cardWrapper5.insertAdjacentElement("beforeend", card.cloneNode(true));
});

arrowBtns5.forEach(btn => {
    btn.addEventListener("click", () => {
        cardWrapper5.scrollLeft += btn.id === "left" ? -firstcardwidth5 : firstcardwidth5;
    });
});

const dragStart5 = (e) => {
    isDragging5 = true;
    cardWrapper5.classList.add("dragging");
    startX5 = e.pageX;
    startScrollLeft5 = cardWrapper5.scrollLeft;
}

const dragging5 = (e) => {
    if (!isDragging5) return;
    cardWrapper5.scrollLeft = startScrollLeft5 - (e.pageX - startX5);
}

const dragStop5 = () => {
    isDragging5 = false;
    cardWrapper5.classList.remove("dragging");
}

const autoplay5 = () => {
    if (window.innerWidth < 800) return;
    timeoutId5 = setTimeout(() => cardWrapper5.scrollLeft += firstcardwidth5, 2500);
}

autoplay5();

const infiniteScroll5 = () => {
    if (cardWrapper5.scrollLeft === 0) {
        cardWrapper5.classList.add("no-transition");
        cardWrapper5.scrollLeft = cardWrapper5.scrollWidth - (2 * cardWrapper5.offsetWidth);
        cardWrapper5.classList.remove("no-transition");
    } else if (Math.ceil(cardWrapper5.scrollLeft) === cardWrapper5.scrollWidth - cardWrapper5.offsetWidth) {
        cardWrapper5.classList.add("no-transition");
        cardWrapper5.scrollLeft = cardWrapper5.offsetWidth;
        cardWrapper5.classList.remove("no-transition");
    }

    clearTimeout(timeoutId5);
    if (!slidecontainer5.matches(":hover")) autoplay5();
}

cardWrapper5.addEventListener("mousedown", dragStart5);
cardWrapper5.addEventListener("mousemove", dragging5);
document.addEventListener("mouseup", dragStop5);
cardWrapper5.addEventListener("scroll", infiniteScroll5);
slidecontainer5.addEventListener("mouseenter", () => clearTimeout(timeoutId5));
slidecontainer5.addEventListener("mouseleave", autoplay5);

//getbtn
const Getbtn = document.querySelectorAll(".get");
const xbtn = document.querySelector(".overlayshow .container i");
const show = document.querySelector(".overlayshow ");

Getbtn.forEach(btn => {
    btn.addEventListener("click",() =>{
        document.querySelector("body").style.overflow = "hidden";
        show.classList.remove("hide");
     });
});

xbtn.addEventListener("click",() =>{
    document.querySelector("body").style.removeProperty("overflow")
    show.classList.add("hide");
 });
 

 const activePage = window.location.pathname.split('/').pop();
 const navlinks = document.querySelectorAll(".navbar ul li a");
 navlinks.forEach(link => {
     if (link.href.includes(activePage)) {
         link.classList.add('active');
     }
 });
 