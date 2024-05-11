let mm = gsap.matchMedia()
let sm = gsap.matchMedia()

const t1 = gsap.timeline()

t1.from([".hero_text", ".hero_text2", ".header-sub-text"], {
    stagger: {
        amount: .9
    },
    opacity: 0,
    y: -20,
    // duration:.3
})
t1.from(".second", {
    x: "1000px",
    // opacity:0,
    duration: 2.5,
}, "start").to(".second", {
    x: "100",
    opacity: 1,
    ease: "power1.in",
},).to(".first", {
    opacity: 1,
    ease: "power1.in",
    scaleY: 1
}, "start").to(".floatt", {
    opacity: 1
}).to(".float2", {
    opacity: 1
})


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    mm.add("(min-width:767px)", () => {
        let t2 = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: ".solution-options",
                pin: true, // pin the trigger element while active
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=500", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                snap: {
                    snapTo: "labels", // snap to the closest label in the timeline
                    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                },
            },
        });

        t2.to(".cardd", {
            x: "-1000"
        })
    })

});

