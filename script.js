

const TimeLine = gsap.timeline()
TimeLine
.from('.animation', { autoAlpha: 0, duration: 1, y: 100} )
.to(".animation", {duration: 1, y: -20, repeat: -1, yoyo: true, ease: "sine.inOut"})
.from('.title', { autoAlpha: 0, duration: 1, y: 0})




$(function(){
    //hide&show menu
    $("#btn").on("click",function(){
        $("#menu").toggleClass("hidden");
    });
});
