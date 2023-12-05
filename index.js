window.addEventListener('load', function() {
  // Hide the loader
  document.querySelector('.loader').style.display = 'none';

  // Show the website content
  document.querySelector('.content').style.display = 'block';
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// --- RED PANEL ---

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap.timeline();

tl.from("nav h1 ,.nav-items li", {
  opacity: 0,
  y: -100,
  stagger: 0.1,
  scrub: true,
});

tl.from(
  ".left .left-content",
  {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    scrub: true,
  },
  "a"
);
tl.from(
  ".right  .hero-img",
  {
    opacity: 0,
    x: 200,
    duration: 0.8,
    stagger: 0.3,

  },
  "a"
);
tl.from(" .about-section ", {
  opacity: 0,
    x: 200,
    duration: 1,
    stagger: 3,

  scrollTrigger: {
    trigger: " .about-section .about-container",
    scroller: ".main",
    scrub: true,
   
    start:"-100%",
    end:"-15%",
  }
}); 
tl.from(" .skill-section ", {
  opacity: 0,
    y: 200,
    duration: 1,
    stagger: 3,

  scrollTrigger: {
    trigger: " .skill-section ",
    scroller: ".main",
    scrub: true,
   
    start:"-100%",
    end:"-15%",
  }
});
tl.from(" .project-section ", {
  opacity: 0,
    y: 200,
    duration: 1,
    stagger: 3,

  scrollTrigger: {
    trigger: " .project-section ",
    scroller: ".main",
    scrub: true,
   
    start:"-100%",
    end:"-15%",
  }
});
