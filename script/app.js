gsap.registerPlugin(ScrollTrigger);


  // gsap code here
gsap.to('.anim__para', {
    ScrollTrigger: 'anim__para'
})



const animPara= document.querySelector('.anim__para')
// split elements with the class "split" into words and characters

    const text = new SplitType(animPara, { types: 'chars'})


    // now animate the characters in a staggered fashion
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: animPara,
        start: 'top 60%',
        end: 'top 10%',
        toggleActions: "restart pause resume none",
        scrub: true,
        markers: false
    },
    opacity: 0.2,// fade in from opacity: 0 and visibility: hidden
    stagger: 0.1 // 0.05 seconds between each
});





