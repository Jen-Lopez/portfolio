const menu = document.querySelector (".burger");
const nav = document.querySelector (".nav-links");
const navLinks = document.querySelectorAll (".nav-links li");
var open = false;

const navSlide = () => {
    nav.classList.toggle('nav-active');
    if (!open) {open = true; nav.classList.add("transition"); }
    else {
      open = false;
      setTimeout(function(){
        nav.classList.remove('transition')
      }, 550);
    }
    navLinks.forEach((link, i) => {
      if (link.style.animation) {link.style.animation = "";}
      else {link.style.animation = `navLinkFade 0.5s ease forwards ${i/7 + .5}s`;}

      link.addEventListener("click", function() {navSlide();})
    });
    menu.classList.toggle('toggle');
    document.querySelector ("body").classList.toggle("fixed");
}

const touchBurger = () => {
  menu.addEventListener("click", () => {navSlide();}
)}

const touchOutside = () => {
  document.querySelector('#main-img').addEventListener("click", () => {
    if (open) {navSlide();} });
}

const accordion = () => {
  var accordionButtons = document.querySelectorAll('.expand');
  accordionButtons.forEach((button, i) => {
    button.addEventListener("click", function() {
      var content = this.nextElementSibling.nextElementSibling;
      if (content.style.maxHeight) { content.style.maxHeight = null;  this.innerText = "[+]";}
      else {content.style.maxHeight = content.scrollHeight + "px"; this.innerText = "[-]";}
    })
  });
}

const scrollHide = () => {
  var navbar = document.querySelector('nav');
  var lastScrollTop = 0; 
  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-70px";
    } else {navbar.style.top = "0";}
    lastScrollTop = scrollTop;
  })
}
// LAXX JS
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

scrollHide(); touchBurger(); touchOutside(); accordion();
