document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".heroBanner",
      start: "top top",
      end: "+=1000", // kitna scroll me animation chale
      scrub: true,
      pin: true, // Background aur heroBanner lock rahega
      anticipatePin: 1,
      markers: false,
    },
  });

  // First shape (right slide + fade out)
  tl.to(".first-shape", {
    left: 750,
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
  });

  // Second shape (resize + reposition)
  tl.to(
    ".second-shape",
    {
      top: -690,
      right: -90,
      width: 1290,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );

  // Third shape (Diagonal cross move to bottom-right corner + fade out)
  tl.to(
    ".third-shape",
    {
      x: 500, // right move (adjust as per screen width)
      y: 500, // down move (adjust as per screen height)
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );
  tl.to(".heroBanner h1", {
    duration: 1.5,
    text: "IGNITING IDEAS, FORGING FUTURES.", // text animate letter by letter
    ease: "none",
  });
});
