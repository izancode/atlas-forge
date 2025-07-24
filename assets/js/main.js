document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".heroBanner",
      start: "top top",
      end: "+=2000", // kitna scroll me animation chale
      scrub: true,
      pin: true, // Background aur heroBanner lock rahega
      anticipatePin: 1,
      markers: true,
    },
  });
  tl.fromTo(
    ".heroBanner",
    {
      backgroundImage: "url('assets/image/hero-banner/background/1.png')",
      ease: "none", // scrub ke saath smooth transition
    },
    {
      backgroundImage: "url('assets/image/hero-banner/background/2.png')",
      ease: "none", // scrub ke saath smooth transition
    },
    "<"
  );

  // First shape (right slide + fade out)
  tl.fromTo(
    ".first-shape",
    {
      x: 0,
      opacity: 0.7,
    },
    {
      x: 750,
      y: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );

  // Second shape (resize + reposition)
  tl.fromTo(
    ".second-shape",
    {
      x: 0,
      y: -685,
      opacity: 0.7,
      scale: 1,
    },
    {
      x: 312,
      y: -505,
      scale: 2,
      opacity: 0.9,
      // width: 1275,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );

  // Third shape (Diagonal cross move to bottom-right corner + fade out)
  tl.fromTo(
    ".third-shape",
    {
      x: 652, // right move (adjust as per screen width)
      y: -766, // down move (adjust as per screen height)
      opacity: 0.9,
    },
    {
      x: 500, // right move (adjust as per screen width)
      y: 500, // down move (adjust as per screen height)
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );

  tl.to(
    ".heroBanner h1",
    {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "<"
  )
    .fromTo(
      ".heroBanner h1",
      {
        text: "Fashion & Lifestyle <br> Incubation Cell", // This changes the text
        fontSize: "48px",
        lineHeight: "62px",
        letterSpacing: "2px",
        marginBottom: "210px ",
        duration: 0.01,
      },
      {
        text: "IGNITING IDEAS,<br> FORGING FUTURES.", // This changes the text
        fontSize: "84px",
        lineHeight: "88px",
        letterSpacing: "8px",
        marginBottom: "116px",
        duration: 0.01,
      }
    )
    .to(
      ".heroBanner h1",
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.in",
      },
      "<"
    );
  tl.fromTo(
    ".first-shape",
    {
      x: 750,

      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 0.7,
      duration: 1.5,
      ease: "power2.inOut",
    }
  );
  tl.fromTo(
    ".second-shape",
    {
      x: 312,
      y: -505,
      scale: 2,
      opacity: 0.9,
    },
    {
      x: 0,
      y: -685,
      opacity: 0.7,
      scale: 1,
      // width: 1275,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );
  tl.fromTo(
    ".third-shape",
    {
      x: 500,
      y: 500,
      opacity: 0,
    },
    {
      x: 652,
      y: -766,
      opacity: 0.9,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );

  tl.to(
    ".heroBanner h1",
    {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    },
    "<"
  )

    .fromTo(
      ".heroBanner h1",
      {
        text: "IGNITING IDEAS,<br> FORGING FUTURES.", // This changes the text
        fontSize: "84px",
        lineHeight: "88px",
        letterSpacing: "8px",
        marginBottom: "116px",
        duration: 0.01,
      },
      {
        text: "Fashion & Lifestyle <br> Incubation Cell", // This changes the text
        fontSize: "48px",
        lineHeight: "62px",
        letterSpacing: "2px",
        marginBottom: "210px ",
        duration: 0.01,
      }
    )

    .to(
      ".heroBanner h1",
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    );

  tl.fromTo(
    ".heroBanner",

    {
      backgroundImage: "url('assets/image/hero-banner/background/2.png')",
      ease: "none", // scrub ke saath smooth transition
    },
    {
      backgroundImage: "url('assets/image/hero-banner/background/1.png')",
      ease: "none", // scrub ke saath smooth transition
    },
    "<"
  );
});
