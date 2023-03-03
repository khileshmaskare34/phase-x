var ti = gsap.timeline;
gsap.to("#main #line1",{
    width:"100%",
    height:"1px",
    duration:3,
    ease:Expo.InOut
})
gsap.to("#main #line11",{
    width:"100%",
    height:"1px",
    duration:2,
    ease:Expo.InOut
})
gsap.to("#main #line2",{
    width:"50%",
    delay:1,
    height:"1px",
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #line2a",{
    width:"50%",
    delay:1,
    height:"1px",
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #line3",{
    width:"1px",
    delay:2,
    height:"50%",
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #line3a",{
    width:"1px",
    delay:2,
    height:"45%",
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #cir5",{
    opacity:1,
    delay:2,
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #cir1",{
   
    y:100,
    x:-100,
    delay:2.5,
    opacity:1,
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #cir2",{
   
    y:100,
    x:100,
    delay:2.5,
    opacity:1,
    duration:2,
    ease:Expo.InOut
})


gsap.to("#main #cir3",{
   
    y:-100,
    x:100,
    delay:2.5,
    opacity:1,
    duration:2,
    ease:Expo.InOut
})

gsap.to("#main #cir4",{

    y:-100,
    x:-100,
    delay:2.5,
    opacity:1,
    duration:2,
    ease:Expo.InOut
})


gsap.to("#nav",{
    height:"6%",
    opacity:1,
    duration:1,
    ease:Expo.InOut,
    delay:3,
})