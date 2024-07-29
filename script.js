
gsap.from("#page1 #box", {
    scale: 0,
    delay:1,
    duration:2,
    rotate:360
})

gsap.from("#page2 #box", {
    scale: 0,
    //delay:1,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger: "#page2 #box",
        scrollar: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        //scrumb:2
        scrub:2,
      //  pin: true
    }
})

gsap.from("#page3 #box", {
    scale: 0,
   // delay:1,
    duration:2,
    rotate:-720,
    scrollTrigger:{
        trigger: "#page3 #box",
        scrollar: "body", 
        markers: true,
        scrub:2
    }
})


