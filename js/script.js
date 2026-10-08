/* ==============================
   RDC CONSTRUCTION WEBSITE
   ============================== */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


/* ==============================
   NAVBAR SCROLL EFFECT
   ============================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ==============================
   MOBILE MENU
   ============================== */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==============================
   ACTIVE NAVIGATION
   ============================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* ==============================
   SCROLL REVEAL ANIMATION
   ============================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ==============================
   ANIMATED COUNTERS
   ============================== */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

    if (countersStarted) return;

    const heroBottom = document.querySelector(".hero-bottom");

    const position = heroBottom.getBoundingClientRect();

    if (position.top < window.innerHeight) {

        countersStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const duration = 1800;

            const increment = target / (duration / 16);

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);


/* ==============================
   CONTACT FORM
   ============================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your enquiry has been received.";

    formMessage.style.color = "#198754";

    contactForm.reset();

});


/* ==============================
   FOOTER YEAR
   ============================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* ==============================
   HERO PARALLAX
   ============================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.25}px`;

    }

});