
/*--------------------------------------contact from ---------------------*/
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.submitform');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        var customerInfo = {
            name: name,
            email: email,
            message: message
        };

        console.log('Customer Information:', customerInfo);
    });
});

// counter

document.querySelectorAll(".counter span").forEach(valueDisplay => {
    let endValue = parseInt(valueDisplay.getAttribute("data-count"));
    let duration = Math.floor(5000 / endValue);
    let count = 0;
    let counter = setInterval(() => {
        valueDisplay.textContent = ++count;
        if (count === endValue) clearInterval(counter);
    }, duration);
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

//call now click
const callbtn = document.querySelector(".home .Call");

callbtn.addEventListener("click",() =>{
    alert("This our contact number , feel free to ask \n +12345768699");
});

//body
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


//  singupbtn
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var icon = document.querySelector('.toggle-password i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = 'password';
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
