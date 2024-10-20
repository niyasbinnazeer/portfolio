// GSAP Animations with ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

// Animate header text when scrolled into view
gsap.from("header h1", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    scrollTrigger: {
        trigger: "header h1",
        start: "top center",
        toggleActions: "play reverse play reverse"
    }
});

// About Section Animation
gsap.from("#about h2", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});

gsap.from("#about p", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});

// Horizontal Project Section Animation
gsap.from(".project", {
    opacity: 0,
    x: 100,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".project-container",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    }
});

// Accessibility Enhancements
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('tabindex', '0');
    link.setAttribute('role', 'link');
});