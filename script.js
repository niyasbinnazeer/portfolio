gsap.registerPlugin(ScrollTrigger);

// Animate header text with scale and fade-in
gsap.from("header h1", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "header h1",
        start: "top center",
        toggleActions: "play reverse play reverse"
    }
});

gsap.from("header p", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    delay: 0.2,
    scrollTrigger: {
        trigger: "header p",
        start: "top center",
        toggleActions: "play reverse play reverse"
    }
});

// Stagger animations for skill items
gsap.from("#skills ul li", {
    opacity: 0,
    x: -50,
    stagger: 0.3,
    duration: 0.8,
    scrollTrigger: {
        trigger: "#skills",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    }
});

// Parallax effect for project cards
gsap.from(".project", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".project-container",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    }
});

// Card hover effects with GSAP
document.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });