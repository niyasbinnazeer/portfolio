// GSAP Animations

// Home Section Animation
gsap.from("#home .content", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});

// About Section Animation
gsap.from("#about .content", {
    scrollTrigger: "#about",
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power3.out"
});

// Skills Section Animation
gsap.from("#skills .skill", {
    scrollTrigger: "#skills",
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power2.out"
});

// Experience Section Animation
gsap.from(".timeline-item", {
    scrollTrigger: "#experience",
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.3,
    ease: "power2.out"
});

// Projects Section Animation
gsap.from(".card", {
    scrollTrigger: "#projects",
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.2,
    ease: "power2.out"
});

// Education Section Animation
gsap.from(".education-list li", {
    scrollTrigger: "#education",
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    ease: "power2.out"
});

// Contact Section Animation
gsap.from("#contact .content", {
    scrollTrigger: "#contact",
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});
