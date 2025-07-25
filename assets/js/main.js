function openNavigation() {
  const nav = document.querySelector("header nav .menu");
  const icon = document.querySelector(".hamburger img");
  nav.classList.toggle("menu-active");
  if (nav.classList.contains("menu-active")) {
    icon.src = "assets/image/icon/close.svg";
  } else {
    icon.src = "assets/image/icon/hamburger.svg"; // Change back to hamburger icon when menu is closed
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const mm = gsap.matchMedia();

  // Timeline banane wala function (common animation flow)
  function createTimeline(options) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroBanner",
        start: "top top",
        end: options.scrollEnd, // har viewport ka alag scroll length
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    // Background change
    tl.fromTo(
      ".heroBanner",
      { backgroundImage: "url('assets/image/hero-banner/background/1.png')" },
      { backgroundImage: "url('assets/image/hero-banner/background/2.png')" },
      "<"
    );

    // First shape
    tl.fromTo(
      ".first-shape",
      {
        x: options.firstShape.startX,
        y: options.firstShape.startY,
        opacity: 0.7,
      },
      {
        x: options.firstShape.x,
        y: options.firstShape.y,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    // header nav
    tl.fromTo(
      "nav",
      {
        x: options.navShape.startX,
        y: options.navShape.startY,
      },
      {
        x: options.navShape.x,
        y: options.navShape.y,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    // Second shape
    tl.fromTo(
      ".second-shape",
      {
        x: options.secondShape.startX,
        y: options.secondShape.startY,
        opacity: 0.7,
        scale: 1,
      },
      {
        x: options.secondShape.x,
        y: options.secondShape.y,
        scale: options.secondShape.scale,
        opacity: 0.9,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    // Third shape
    tl.fromTo(
      ".third-shape",
      {
        x: options.thirdShape.startX,
        y: options.thirdShape.startY,
        opacity: 0.9,
      },
      {
        x: options.thirdShape.x,
        y: options.thirdShape.y,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    // Text fade out and change
    tl.to(
      ".heroBanner h1",
      { opacity: 0, duration: 0.5, ease: "power2.out" },
      "<"
    )
      .fromTo(
        ".heroBanner h1",
        {
          text: options.text.old,
          fontSize: options.text.oldSize,
          lineHeight: options.text.oldLineHeight,

          duration: 0.01,
        },
        {
          text: options.text.new,
          fontSize: options.text.newSize,
          lineHeight: options.text.newLineHeight,

          duration: 0.01,
        }
      )
      .to(
        ".heroBanner h1",
        { opacity: 1, duration: 0.8, ease: "power2.in" },
        "<"
      );

    // Reverse shapes (animation wapas)
    tl.fromTo(
      ".first-shape",
      { x: options.firstShape.x, y: options.firstShape.y, opacity: 0 },
      {
        x: options.firstShape.startX,
        y: options.firstShape.startY,
        opacity: 0.7,
        duration: 1.5,
        ease: "power2.inOut",
      }
    );
    tl.fromTo(
      ".second-shape",
      {
        x: options.secondShape.x,
        y: options.secondShape.y,
        scale: options.secondShape.scale,
        opacity: 0.9,
      },
      {
        x: options.secondShape.startX,
        y: options.secondShape.startY,
        opacity: 0.7,
        scale: 1,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.fromTo(
      ".third-shape",
      { x: options.thirdShape.x, y: options.thirdShape.y, opacity: 0 },
      {
        x: options.thirdShape.startX,
        y: options.thirdShape.startY,
        opacity: 0.9,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    // Text reverse
    tl.to(
      ".heroBanner h1",
      { opacity: 0, duration: 0.5, ease: "power2.in" },
      "<"
    )
      .fromTo(
        ".heroBanner h1",
        {
          text: options.text.new,
          fontSize: options.text.newSize,
          lineHeight: options.text.newLineHeight,

          duration: 0.01,
        },
        {
          text: options.text.old,
          fontSize: options.text.oldSize,
          lineHeight: options.text.oldLineHeight,

          duration: 0.01,
        }
      )
      .to(
        ".heroBanner h1",
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "<"
      );

    // Background reverse
    tl.fromTo(
      ".heroBanner",
      { backgroundImage: "url('assets/image/hero-banner/background/2.png')" },
      { backgroundImage: "url('assets/image/hero-banner/background/1.png')" },
      "<"
    );

    return tl;
  }
  mm.add("(min-width: 992px) and (max-width: 1280px)", () => {
    createTimeline({
      scrollEnd: "+=2000",
      firstShape: { startX: "0vw", startY: "0vh", x: "40vw", y: "0vh" },
      navShape: { startX: "0vw", startY: "-12vh", x: "0vw", y: "0vh" },
      secondShape: {
        startX: "0vw",
        startY: "-53vh",
        x: "24vw",
        y: "-59vh",
        scale: 3,
      },
      thirdShape: { startX: "-27.5vw", startY: "6vh", x: "40vw", y: "40vh" },
      text: {
        old: "Fashion & Lifestyle <br> Incubation Cell",
        new: "IGNITING IDEAS,<br> FORGING FUTURES.",
        oldSize: "26px",
        oldLineHeight: "36px",

        newSize: "40px",
        newLineHeight: "48px",
      },
    });
  });
  // 1366px ke liye timeline
  mm.add("(min-width: 1281px) and (max-width: 1366px)", () => {
    createTimeline({
      scrollEnd: "+=2000",
      firstShape: { startX: "0vw", startY: "0vh", x: "40vw", y: "0vh" },
      navShape: { startX: "0vw", startY: "-9vh", x: "0vw", y: "0vh" },
      secondShape: {
        startX: "0vw",
        startY: "-53vh",
        x: "16vw",
        y: "-36vh",
        scale: 2,
      },
      thirdShape: { startX: "32vw", startY: "-69vh", x: "40vw", y: "40vh" },
      text: {
        old: "Fashion & Lifestyle <br> Incubation Cell",
        new: "IGNITING IDEAS,<br> FORGING FUTURES.",
        oldSize: "36px",
        oldLineHeight: "48px",

        newSize: "64px",
        newLineHeight: "72px",
      },
    });
  });

  // 1920px (default) ke liye timeline
  mm.add("(min-width:1367px)", () => {
    createTimeline({
      scrollEnd: "+=2000",
      firstShape: { startX: "0vw", startY: "0vh", x: "40vw", y: "0vh" },
      navShape: { startX: "0vw", startY: "-8vh", x: "0vw", y: "0vh" },
      secondShape: {
        startX: "1vw",
        startY: "-65vh",
        x: "28vw",
        y: "-72vh",
        scale: 3,
      },
      thirdShape: { startX: "33vw", startY: "-76vh", x: "45vw", y: "45vh" },
      text: {
        old: "Fashion & Lifestyle <br> Incubation Cell",
        new: "IGNITING IDEAS,<br> FORGING FUTURES.",
        oldSize: "48px",
        oldLineHeight: "62px",

        newSize: "84px",
        newLineHeight: "88px",
      },
    });
  });
});
