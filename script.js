// GSAP Animations

// Floating Element Animation
gsap.to(".floating-element", {
    duration: 10,
    x: 100,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Home Section Animation
gsap.from("#home .content", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});

// Skills Section Animation
gsap.from(".skill", {
    scrollTrigger: "#skills",
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
    ease: "power3.out"
});

// Projects Section Animation
gsap.from(".card", {
    scrollTrigger: "#projects",
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    ease: "power3.out"
});

// Contact Form Animation
gsap.from("#contact form", {
    scrollTrigger: "#contact",
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    ease: "elastic.out(1, 0.3)"
});

// Mobile Menu Toggle
const menu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
