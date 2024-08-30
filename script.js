function gsap(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger: "#second",
        start: "0% 85%",
        end: "70% 50%",
        scrub: true,
        markers: false,
    }})
    tl.to(".can",{
        top: "130%",
        left: "11%",
    },"page1")
    
    tl.to(".blackSoda2",{
        top: "145%",
        left: "20%",
        scale: "0.7"
    },"page1")
    
    
    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: "#third",
        start: "0% 65%",
        end: "50% 60%",
        scrub: true,
        markers: true,
    }})
    
    tl2.from(".blackhops", {
      rotate: "-90deg",
      x: -200,
      duration: 1,
    }, "three")
    tl2.from(".blackberry", {
        y: -200,
        duration: 1,
      }, "three")
    tl2.from(".tuborg", {
        rotate: "90deg",
        x: 200,
        duration: 1,
    }, "three")
    tl2.from(".lemon",{
        rotate: "720deg",
        duration: 1,
        ease: "power2.inOut",
        top:"0",
        right: "0",
    
    },"three")
    
    tl2.to(".can", {
        top: "222.5%",
        left: "41%",
        duration: 1,
        ease: "back.out"
    }, "three")
    
    tl2.to(".blackSoda2",{
        top: "245%",
        left: "28%",
        scale: "0.7",
        duration: 1,
        ease: "power2.inOut",
    
    
    },"three")
}

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        lerp: 0.02,
    });
}

loco();
gsap();