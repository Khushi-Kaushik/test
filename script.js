function loaderPage(){
    var timer = document.querySelector(".line-part1 h5")
var ctr=0;
setInterval(function(){
    if(ctr<100){
        ctr++;
        timer.innerHTML = ctr;
    }
    else{
        ctr=100;
    }
    
},30)

var g = gsap.timeline()
g.from(".line h1",{
    y:150,
    stagger:0.1,
    duration:0.4,
    delay:0.4
})
g.from(".line h2",{
    y:50,
    duration:0.8,
    opacity:0,
    ease: "power3.in",
    // delay:0.4
})

g.from(".bottom",{
    duration: 1.1,
        opacity: 0,
        y: 50,
        ease: "power3.in",
})
g.to(".loader",{
    opacity:0,
    duration:0.4,
    delay:1.5
})
g.from(".page1",{
    delay:0.5,
    y:1600,
    opacity:0,
    duration:0.5
    // ease:"Power4"
})
g.to(".loader",{
    display:"none"
})
}
loaderPage()
g.from(".page1",{
    y:150,
    stagger:0.1,
    duration:0.4,
    delay:0.4
})

