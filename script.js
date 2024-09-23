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
    delay:1
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
g.from(".nav",{
    
    opacity:0
})
g.from(".number h1",{
    duration: 1.1,
        opacity: 0,
        y: 50,
        ease: "power3.in",
})
g.from(".hero h1",{
    y:120,
    stagger:0.1,
    opacity:0
})
g.from(".hero h2",{
    y:120,
    stagger:0.1,
    opacity:0
})
}

function cursoranimation(){
    document.addEventListener("mousemove",function(move){
        gsap.to(".crsr",{
            left:move.x,
            top:move.y
        })
    })
    Shery.makeMagnet(".nav-2 h3" , {
        // ease: "cubic-bezier(1, 5, 1, 2)",
        // duration: 0.5,
      });
    Shery.makeMagnet(".menu-opener__square" , {
        // ease: "cubic-bezier(1, 2, 1, 2)",
        // duration: 0.5,
    });
}



cursoranimation()
loaderPage()

gsap.to(".bottom-left h3", {
    y: -100, // Move text up
    opacity: 0, // Fade out
    duration: 2, // Duration of the animation
    delay:1,
    ease: "power1.in", // Ease in
    repeat: -1, // Infinite loop
    yoyo: true, // Move back and forth
    repeatDelay: 0.5, // Delay between repeats
    onRepeat: () => {
      // Bring text back to the bottom once it's invisible
      gsap.set(text, { y: 100, opacity: 0 });
      gsap.to(text, { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" });
    }
  });

