//Menu show.
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show");
        });
    }
}
showMenu("nav-toggle","nav-menu");

//Active and remove border bottom menu.
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", linkAction));

function linkAction(){
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

//Scroll reveal animation.
const sr = ScrollReveal({
    origin: "left",
    distance: "50px",
    duration: 800,
    reset: true
})

//Scroll reveal HOME.
sr.reveal(".home__title",{});
sr.reveal(".button",{delay: 100});
sr.reveal(".home__img",{delay: 200});
sr.reveal(".home__social-icon",{interval: 100});

//Scroll reveal ABOUT.
sr.reveal(".about__img",{});
sr.reveal(".about__subtitle",{delay: 100});
sr.reveal(".about__text",{delay: 200});

//Scroll reveal SKILLS.
sr.reveal(".skills__subtitle",{});
sr.reveal(".skills__text",{delay: 100});
sr.reveal(".skills__data",{interval: 200});
sr.reveal(".skills__img",{delay: 200});

//Scroll reveal PROJECTS.
sr.reveal(".projects__img",{interval: 100});

//Scroll reveal CONTACT.
sr.reveal(".contact__input",{interval: 100});


//DARK LIGHT THEME

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-mode";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

