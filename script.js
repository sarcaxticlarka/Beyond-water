gsap.to(".slide", {
    transform: 'translate(-300%)', 
    duration: 0.5,
    scrollTrigger: {
        trigger: ".slides", 
        start: "top 0",
        end: "+=3000",
        scrub: 0.3,
        
 
    }
})


var tl = gsap.timeline({
    repeat: -1
})

tl.to(".banner-img", {
    transform: 'translateX(-100%)',
    duration:2,
    ease:"power4"
}, "+=1")
tl.to(".banner-img", {
    transform: 'translateX(-200%)',
    duration:2,
    ease:"power4"
}, "+=1")
tl.to(".banner-img", {
    transform: 'translateX(-300%)',
    duration:2,
    ease:"power4"
}, "+=1" )
tl.to(".banner-img", {
    transform: 'translateX(-400%)',
    duration:2,
    ease:"power4"
}, "+=1")
tl.to(".banner-img", {
    transform: 'translateX(-400%)',
    duration:2,
    ease:"power4"
}, "+=1")


// gsap.from(".b2", { 
//     scale: 0.5,
//     duration: 0.5,
//     scrollTrigger: {
//         trigger: "sugar",
//         markers: true,
//         start: "top 0",
//         end: "bottom 0",
//         scrub: 0.3,
        
 
//     }
// })



// var btn = document.querySelector(".slide-btn")

// var move = 0
// btn.addEventListener("click", ()=>{
//      move = move+100
//     if(move != 600){
//         gsap.to(".banner-img", {
//             transform: `translateX(${-move}%)`
//         })
//     }else{
//         gsap.to(".banner-img",{
//             duration:0,
//             transform: `translateX(0%)`
//         })
//         move=0
//     }
// })