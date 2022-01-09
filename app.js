let controller;
let slideScene;

function animateSlides(){
    controller = new ScrollMagic.Controller();
    // You want to animate all the different slides
    const sliders = document.querySelectorAll('.slide');
    // You also want to animate the navigation header
    const nav = document.querySelector('.nav-header');

    //Loop over each of the slides in sliders to create reveal animation
    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-img');
        const revealText = slide.querySelector('.reveal-text');
        
        const slideTimeline = gsap.timeline({
            defaults:{duration:1.3, ease:"power2.inOut"}
        });
        slideTimeline.fromTo(revealImg, {x:"0%"}, {x:"100%"})
        slideTimeline.fromTo(revealText, {x:"0%"}, {x:"100%"}, '-=0.95')
        slideTimeline.fromTo(nav,{y:"-100%"}, {y:"0%"}, '-=0.7')

        //Create scenes for scrolling animation!
        slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.45,
            reverse:false,
        })
        .setTween(slideTimeline)
        .addIndicators()
        .addTo(controller);
    });
}

//Animate navigation tab opening
const burger = document.querySelector('.burger');
function navOpen(e){
    if (!e.target.classList.contains("active")){
        e.target.classList.add('active');
        // change the burger some how
        gsap.to('#cap', 0.5, {rotate: "23", x: 5, y: -5});
        // expand the nav page
        gsap.to('.nav-bar', 1, {clipPath:"circle(2000px at 100% -10%"});
        document.body.classList.add('hide');
    } else{
        e.target.classList.remove('active');
        // change the burger some how
        gsap.to('#cap', 0.5, {rotate: "0", x: 0, y: 0});
        // expand the nav page
        gsap.to('.nav-bar', 1, {clipPath:"circle(50px at 100% -10%"});
        document.body.classList.remove('hide');
    }
}

 // Add event listener for click of burger
burger.addEventListener('click', navOpen); 
animateSlides();