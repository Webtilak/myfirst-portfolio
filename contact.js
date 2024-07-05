const activePage = window.location.pathname.split('/').pop();
const navlinks = document.querySelectorAll(".navbar ul li a");
navlinks.forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add('active');
    }
});
