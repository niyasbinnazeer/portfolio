// GSAP animation for portfolio cards
gsap.from(".card", {
  duration: 1,
  opacity: 0,
  x: -50,
  stagger: 0.3, // Delay between animations for each card
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%", // Trigger the animation when the card is in the viewport
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
