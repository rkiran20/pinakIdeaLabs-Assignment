const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  const icon = card.querySelector(".card-icon");
  card.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      rotation: 360,
      duration: 0.6,
      ease: "power1.out",
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      rotation: 0,
      duration: 0.6,
      ease: "power1.out",
    });
  });
});
