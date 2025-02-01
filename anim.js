const textAnim1 = new SplitType(".text_anim", { types: 'lines,  words'});
const textAnim2 = new SplitType(".p-text-anim", { types: 'lines,  words'});
// let ps = document.querySelectorAll(".abt-p .line .word");

gsap.to('.word',{
    // yes, we can add it to an entire timeline!
    y: 0,
    stagger: 0.05,
    delay: 0.5,
    duration: 0.5,
    ease: "sine.out"
  });


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-img",
        scroller: "body",
        start: "top bottom",
        end: "top center",
        scrub: true
    }
})

tl.from(".feature-img", {
    opacity: 0,
    y: 100
})

// let newTl = new gsap.timeline({
//     scrollTrigger: {
//         trigger: ".abt-p",
//         start: "top 80%",
//         markers: true
//     }
// })

// newTl.from(".abt-p .line .word", {
//     opacity: 0,
//     y: 10,
//     duration: 0.5,
//     stagger: 0.08
// })

// let pTags = gsap.utils.toArray('.abt-p .line .word');

// pTags.forEach(p => {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: p,
//           markers: true,
//           start: 'top 80%',
//           // toggleActions: "restart none none none",
//           // toggleActions: "play reset play reset"
//         }
//       });
//     tl.from(p, {
//     opacity: 0,
//     y: 10,
//     duration: 0.5,
//     stagger: 0.08
//     })
// });