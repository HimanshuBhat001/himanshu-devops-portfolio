// ==========================
// LOADER FIX
// ==========================

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            loader.style.pointerEvents = "none";

        }, 1500);

    }

});


// ==========================
// MOBILE NAVBAR
// ==========================

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

if(hamburger){

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ==========================
// TYPING EFFECT
// ==========================

const typingText =
document.querySelector(".typing-text");

const texts = [

    "Building Scalable Cloud Infrastructure",

    "Automating CI/CD Pipelines",

    "Designing DevOps Workflows",

    "Deploying Containerized Applications"

];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

function typeWriter(){

    if(charIndex < texts[textIndex].length){

        typingText.innerHTML +=
        texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);

    }

    else{

        setTimeout(eraseText, 1500);

    }

}

function eraseText(){

    if(typingText.innerHTML.length > 0){

        typingText.innerHTML =
        typingText.innerHTML.slice(0, -1);

        setTimeout(eraseText, 50);

    }

    else{

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;

        }

        charIndex = 0;

        setTimeout(typeWriter, 500);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    if(typingText){

        setTimeout(typeWriter, 500);

    }

});


// ==========================
// CURSOR
// ==========================

const cursor =
document.querySelector(".cursor");

const follower =
document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {

    if(cursor && follower){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";

    }

});


// ==========================
// GSAP
// ==========================

if(typeof gsap !== "undefined"){

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", {

        y: 50,
        opacity: 0,
        duration: 1

    });

    gsap.from(".hero-description", {

        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3

    });

    gsap.utils.toArray(".reveal").forEach((element) => {

        gsap.from(element, {

            scrollTrigger: {

                trigger: element,

                start: "top 85%"

            },

            y: 50,

            opacity: 0,

            duration: 1

        });

    });

}

// NAVBAR SCROLL EFFECT

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

// TIMELINE FILL

gsap.to(".experience-timeline::after", {

    height: "100%",

    scrollTrigger: {

        trigger: ".experience-timeline",

        start: "top 80%",

        end: "bottom 80%",

        scrub: true

    }

});
// EDUCATION ANIMATION

gsap.from(".education-card", {

    scrollTrigger: {

        trigger: ".education-grid",

        start: "top 80%"

    },

    y: 80,

    opacity: 0,

    duration: 1,

    stagger: 0.2,

    ease: "power3.out"

});

// TERMINAL INTRO

window.addEventListener("load", () => {

    const terminal =
    document.querySelector(".terminal-intro");

    setTimeout(() => {

        terminal.style.opacity = "0";

        terminal.style.visibility = "hidden";

        terminal.style.pointerEvents = "none";

    }, 4500);

});

// TIMELINE PROGRESS ANIMATION

gsap.to(".timeline-progress", {

    height: "100%",

    ease: "none",

    scrollTrigger: {

        trigger: ".experience-timeline",

        start: "top 80%",

        end: "bottom 80%",

        scrub: true

    }

});