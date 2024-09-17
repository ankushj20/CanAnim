gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});

// Update ScrollTrigger on Locomotive Scroll events
locoScroll.on("scroll", ScrollTrigger.update);

// Use ScrollTrigger's scrollerProxy for Locomotive Scroll
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

// Refresh Locomotive Scroll & ScrollTrigger after initialization
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// GSAP animations
function animation() {
  gsap.from("#nav h4", {
    opacity: 0,
    y: -300,
    delay: 1,
    duration: 1,
    scale: 0.3,
    stagger: 0.2,
  });

  gsap.from("#nav img", {
    opacity: 0,
    y: -300,
    delay: 1,
    duration: 1,
    scale: 0.3,
  });

  gsap.from("#nav i", {
    opacity: 0,
    y: -300,
    delay: 2,
    duration: 1,
    scale: 0.3,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#second",
      start: "0% 85%",
      end: "70% 50%",
      scrub: true,
      markers: false,
      scroller: "#main", // Make sure you're using the correct scroller
    },
  });

  tl.to(".can", {
    top: "130%",
    left: "11%",
  }, "page1");

  tl.to(".blackSoda2", {
    top: "145%",
    left: "20%",
    scale: "0.7"
  }, "page1");

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#third",
      start: "0% 65%",
      end: "50% 60%",
      scrub: true,
      markers: false,
      scroller: "#main", // Make sure you're using the correct scroller
    },
  });

  tl2.from(".blackhops", {
    rotate: "-90deg",
    x: -200,
    duration: 1,
  }, "three");

  tl2.from(".blackberry", {
    y: -200,
    duration: 1,
  }, "three");

  tl2.from(".tuborg", {
    rotate: "90deg",
    x: 200,
    duration: 1,
  }, "three");

  tl2.from(".lemon", {
    rotate: "720deg",
    duration: 1,
    ease: "power2.inOut",
    top: "0",
    right: "0",
  }, "three");

  tl2.to(".can", {
    top: "222.5%",
    left: "41%",
    duration: 1,
    ease: "back.out"
  }, "three");

  tl2.to(".blackSoda2", {
    top: "245%",
    left: "28%",
    scale: "0.7",
    duration: 1,
    ease: "power2.inOut",
  }, "three");

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#fourth",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
      scroller: "#main", // Make sure you're using the correct scroller
    },
  });

  tl4.to(".tuborg", {
    top: "155%",
    left: "24%",
  });

  tl4.to(".tuborg", {
    rotate: "-17deg",
  });
}

animation();
