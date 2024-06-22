let toggleBtn = document.querySelector(".header__nav__btn-hamburger");
let headerList = document.querySelector(".header__nav__list");

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("togle");
});

function setFocus(element) {
    // Remove 'focused' class from all links
    var links = document.querySelectorAll('.dropdown-content a');
    links.forEach(function(link) {
        link.classList.remove('focused');
    });

    // Add 'focused' class to the clicked link
    element.classList.add('focused');
}