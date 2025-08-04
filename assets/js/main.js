console.log("Javascript is running");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header nav");
  let currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY && currentScrollY > 110) {
    navbar.classList.add("headerScrolledUp");
  } else if (currentScrollY > lastScrollY || currentScrollY <= 110) {
    navbar.classList.remove("headerScrolledUp");
  }

  lastScrollY = currentScrollY;
});
function openNavigation() {
  const nav = document.querySelector("header nav .menu");
  const icon = document.querySelector(".hamburger img");
  nav.classList.toggle("menu-active");
  if (nav.classList.contains("menu-active")) {
    icon.src = "assets/images/icon/close.svg";
  } else {
    icon.src = "assets/images/icon/hamburger.svg"; // Change back to hamburger icon when menu is closed
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const mm = gsap.matchMedia();

  function createTimeline(options) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1",
        start: options.scrollStart,
        end: options.scrollEnd,
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    tl.fromTo(
      ".page1",
      { backgroundImage: "url('assets/images/herobanners/1.png')" },
      { backgroundImage: "url('assets/images/herobanners/2.png')" },
      "<"
    );

    tl.fromTo(
      ".page1 svg path:nth-child(1)",
      { opacity: options.firstShape.startOp },
      {
        x: options.firstShape.endX,
        opacity: options.firstShape.endOp,
        duration: options.firstShape.endDur,
        ease: options.firstShape.endEase,
      },
      "<"
    );
    tl.fromTo(
      ".page1 svg path:nth-child(3)",
      { opacity: options.thirdShape.startOp },
      {
        x: options.thirdShape.endX,
        y: options.thirdShape.endY,
        opacity: options.thirdShape.endOp,
        duration: options.thirdShape.endDur,
        ease: options.thirdShape.endEase,
      },
      "<"
    );

    tl.fromTo(
      "nav",

      {
        y: options.navShape.startY,
      },

      {
        y: options.navShape.endY,
        duration: options.navShape.endDur,
        ease: options.navShape.endEase,
      },
      "<"
    );

    tl.fromTo(
      ".page1 svg path:nth-child(2)",
      { opacity: options.secondShape.startOp },
      {
        x: options.secondShape.endX,
        y: options.secondShape.endY,
        scale: options.secondShape.endScale,
        opacity: options.secondShape.endOp,
        duration: options.secondShape.endDur,
        ease: options.secondShape.endEase,
      },
      "<"
    );

    //  text   here
    tl.to(".one", { opacity: 1, scale: 1, duration: 2 })
      .to(".one", { opacity: 0, scale: 0.9, duration: 1 })

      .to(".two", { opacity: 1, scale: 1, duration: 2 })
      .to(".two", { opacity: 0, scale: 0.9, duration: 1 })

      .to(".three", { opacity: 1, scale: 1, duration: 2 });

    // reverse code here
    tl.add("reversePhase"); // Label add kiya
    tl.to(
      ".page1",
      {
        backgroundImage: "url('assets/images/herobanners/1.png')",
      },
      "reversePhase"
    );
    tl.to(
      ".page1 svg path:nth-child(1)",

      { x: 0, opacity: options.firstShape.startOp },
      "reversePhase"
    );

    // text here

    tl.to(
      ".page1 svg path:nth-child(2)",

      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: options.secondShape.startOp,
        duration: options.secondShape.endDur,
        ease: options.secondShape.endEase,
      },
      "reversePhase"
    );

    tl.to(
      ".page1 svg path:nth-child(3)",

      {
        x: 0,
        y: 0,
        opacity: options.thirdShape.startOp,
        duration: options.thirdShape.endDur,
        ease: options.thirdShape.endEase,
      },
      "reversePhase"
    );
    tl.to(".three", { opacity: 1, scale: 1, duration: 1 })
      .to(".three", { opacity: 0, scale: 0.9, duration: 1 })
      .to(".two", { opacity: 1, scale: 1, duration: 2 })
      .to(".two", { opacity: 0, scale: 0.9, duration: 1 })
      .to(".one", { opacity: 1, scale: 1, duration: 2 });

    return tl;
  }

  mm.add("(min-width: 992px)", () => {
    createTimeline({
      scrollStart: "top top",
      scrollEnd: "+=3000",
      firstShape: {
        startOp: 0.6,
        endX: 600,
        endOp: 0,
        endDur: 1,
        endEase: "power2.inOut",
      },
      thirdShape: {
        startOp: 0.9,
        endX: 600,
        endY: 300,
        endOp: 0,
        endDur: 1,
        endEase: "power2.inOut",
      },
      navShape: {
        startY: "-12vh",
        endY: "0vh",
        endDur: 1,
        endEase: "power2.inOut",
      },
      secondShape: {
        startOp: 0.6,
        endX: 10,
        endY: -20,
        endScale: 1.9,
        endOp: 0.9,
        endDur: 1,
        endEase: "power2.inOut",
      },

      text: {
        // start
        startOp: 0,
        startDur: 0.3,
        startEase: "power2.out",

        // old
        oldText: "Fashion & Lifestyle <br />Incubation Cell",
        oldSize: "2rem",
        textStartDur: 0.01,

        // new

        newText: "IGNITING IDEAS,<br> FORGING FUTURES.",
        newSize: "3rem",
        textEndDur: 0.1,

        // end
        endOp: 1,
        endDur: 0.3,
        endEase: "power2.in",
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        start: "top center",
        end: "+=500",
        toggleActions: "play none none none",
        // markers: true,
      },
      repeat: -1,
      repeatDelay: 1,
      yoyo: false, // Reverse nahi chalega
    });

    // Paths slide-in
    tl2
      .fromTo(
        ".page4 svg path:nth-child(2), .page4 svg path:nth-child(3)",
        { x: 500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      )

      // Text fade-in jab paths center pe ho
      .to(
        ".page4 p",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "-=1"
      )

      // 2 sec wait
      .to({}, { duration: 2 })

      // Paths slide-out + text fade-out
      .to(
        ".page4 svg path:nth-child(2), .page4 svg path:nth-child(3)",
        {
          x: 500,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "startExit"
      )
      .to(
        ".page4 p",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "startExit"
      );
  });
  // mm.add("(min-width: 300px) and (max-width: 991px)", () => {
  //   createTimeline({
  //     scrollStart: "top top",
  //     scrollEnd: "+=3000",
  //     firstShape: {
  //       startOp: 0.6,
  //       endX: 600,
  //       endOp: 0,
  //       endDur: 1,
  //       endEase: "power2.inOut",
  //     },
  //     thirdShape: {
  //       startOp: 0.9,
  //       endX: 600,
  //       endY: 300,
  //       endOp: 0,
  //       endDur: 1,
  //       endEase: "power2.inOut",
  //     },
  //     navShape: {},
  //     secondShape: {
  //       startOp: 0.6,
  //       endX: -50,
  //       endY: -20,
  //       endScale: 1.9,
  //       endOp: 0.9,
  //       endDur: 1,
  //       endEase: "power2.inOut",
  //     },

  //     text: {
  //       // start
  //       startOp: 0,
  //       startDur: 0.3,
  //       startEase: "power2.out",

  //       // old
  //       oldText: "Fashion & Lifestyle <br />Incubation Cell",
  //       oldSize: "1.4rem",
  //       textStartDur: 0.01,

  //       // new

  //       newText: "IGNITING IDEAS,<br> FORGING FUTURES.",
  //       newSize: "1.6rem",
  //       textEndDur: 0.1,

  //       // end
  //       endOp: 1,
  //       endDur: 0.3,
  //       endEase: "power2.in",
  //     },
  //   });
  // });
});
