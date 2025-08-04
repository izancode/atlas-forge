document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  const mm = gsap.matchMedia();

  // 1366px aur niche
  mm.add("(max-width:1366px)", () => {
    const tl = createTimeline({
      secondShape: { x: "15vw", y: "-25vh", scale: 1.5 },
      h1: { fontSize: "48px", lineHeight: "60px" },
    });
  });

  // 1367px aur upar (default)
  mm.add("(min-width:1367px)", () => {
    const tl = createTimeline({
      secondShape: { x: "20vw", y: "-30vh", scale: 2 },
      h1: { fontSize: "84px", lineHeight: "88px" },
    });
  });

  function createTimeline(settings) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroBanner",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.fromTo(
      ".heroBanner",
      { backgroundImage: "url('assets/image/hero-banner/background/1.png')" },
      { backgroundImage: "url('assets/image/hero-banner/background/2.png')" },
      "<"
    );

    tl.fromTo(
      ".first-shape",
      { x: 0, opacity: 0.7 },
      { x: 750, opacity: 0, duration: 1.5, ease: "power2.inOut" },
      "<"
    );

    tl.fromTo(
      ".second-shape",
      { x: 0, y: "-40vh", opacity: 0.7, scale: 1 },
      {
        ...settings.secondShape,
        opacity: 0.9,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.fromTo(
      ".third-shape",
      { x: "30vw", y: "-50vh", opacity: 0.9 },
      { x: "40vw", y: "40vh", opacity: 0, duration: 1.5, ease: "power2.inOut" },
      "<"
    );

    tl.to(".heroBanner h1", { opacity: 0, duration: 0.5 }, "<")
      .fromTo(
        ".heroBanner h1",
        { text: "Fashion & Lifestyle <br> Incubation Cell", ...settings.h1 },
        {
          text: "IGNITING IDEAS,<br> FORGING FUTURES.",
          ...settings.h1,
          duration: 0.01,
        }
      )
      .to(".heroBanner h1", { opacity: 1, duration: 0.8 }, "<");

    return tl;
  }
});
