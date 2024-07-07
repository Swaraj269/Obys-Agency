gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  smartphone: true,
  multiplier: 1.3,
  firefoxMultiplier: 200,
  tablet: {
    smooth: true
  },
  smartphone: {
    smooth: true
  }
});

gsap.to("body", {
  autoAlpha: 1
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

addEventListener('DOMContentLoaded', function(){

    var cursor = document.querySelector('#cursor');
    window.addEventListener("mousemove",function(event){
        gsap.set("#cursor", {
            top:-50,
            left: -50,
        })
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    })
    var count = 0;
    gsap.from(".loadertext h1", {
        y: 100,
        opacity: 0,
        duration: 0.86,
        ease: "power4.out",
        stagger: 0.2,
        onStart: function(){
            gsap.to(".counter h2",{
                opacity: 1,
                duration: 1,
            })
            var counter = setInterval(function(){
                document.querySelector(".counter span").textContent = count;
                count+= Math.floor(Math.random() * 4);
                if(count >= 100) {
                    document.querySelector(".counter span").textContent = 100;
                    clearInterval(counter);
                    loadercompleted();
                }
            },20);
        }
    })

    function loadercompleted() {
        gsap.to(".loadertext h1", {
            opacity: 0,
            duration: 1.7,
            stagger: 0.2,
            delay: 0.2,
        });
        gsap.to(".counter h2",{
            opacity: 0,
            duration: 1.5,
            delay: 0.2,
            onComplete : function(){
                gsap.to("#loader",{
                    y: -1000,
                    duration: 0.7,
                    ease: "power4.in",
                    opacity: 0,
                    onComplete: function(){
                        gsap.to("#loader",{
                            display: 'none',
                        })
                    }
                })
                gsap.to("#cursor",{
                    opacity: 1,
                    delay: 0.7,
                    duration: 0.5,
                })
                hometextanimation();
            }
        })
    }
    function hometextanimation() {
        gsap.from(".maintext2 h1",{
            y: 1000,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
        })
    }
    Shery.makeMagnet(".navpart3 h1", {
    });
    Shery.makeMagnet("nav svg", {
    });

    var link = document.querySelectorAll(".link");
    link.forEach((elem,index)=>{
        elem.addEventListener("mouseover", function(){
            gsap.to(`.viewtext${index}`,{
                y: "-100%",
                duration: 0.5,
                ease: "power4.easein"
            })
        })
        elem.addEventListener("mouseleave", function(){
            gsap.to(`.viewtext${index}`,{
                y: "0%",
                duration: 0.5,
                ease: "power4.easein"
            })
        })
    })
    var h1 = document.querySelector("#footerheading h1")
    var footertext = document.querySelector("#footerheading h1").textContent;
    var splittedtext = footertext.split("");
    var clutter = '';
    splittedtext.forEach((elem)=>{
        if(elem === " ") clutter += " ";
        clutter += `<span>${elem}</span>`;
    })
    h1.innerHTML = clutter;

    var footerheading = document.querySelector("#footerheading");
    footerheading.addEventListener("mouseover", function(){
        gsap.to("#footerheading span",{
            color: "transparent",
            webkitTextStroke: "1px #fff",
            duration: 0.5,
            fontFamily: "italicfont",
            stagger: 0.002,
        })
    })
    footerheading.addEventListener("mouseleave", function(){
        gsap.to("#footerheading span",{
            fontFamily: "mainfont",
            color: "#fff",
            duration: 0.5,
            stagger: 0.002,
        })
    })

    Shery.imageEffect(".firstimgcontainer",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7660460587192459},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} ,
        gooey: true,
    })
    Shery.imageEffect("#secondoneimg",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7660460587192459},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} ,
        gooey: true,
    })
    Shery.imageEffect("#thirdoneimg",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7660460587192459},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} ,
        gooey: true,
    })
    Shery.imageEffect("#fourthoneimg",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7660460587192459},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} ,
        gooey: true,
    })
    Shery.imageEffect("#fifthoneimg",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7660460587192459},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} ,
        gooey: true,
    })
    Shery.imageEffect("#sixthoneimg",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7660460587192459},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} ,
        gooey: true,
    })


    var circle1 = document.querySelector('#circle1');
    var circle2 = document.querySelector('#circle2');
    var circle3 = document.querySelector('#circle3');
    circle1.addEventListener("mouseover", function(){
        gsap.to("#innercircle1",{
            scale: 1,
            duration: 0.3,
            ease: "power4.easeout"
        })
        gsap.to("#innercircle1 h1",{
            scale: 1,
            opacity: 1,
            delay: 0.3,
            duration: 0.3,
            ease: "power4.easeout"
        })
    })
    circle1.addEventListener("mouseleave", function(){
        gsap.to(`#innercircle1`,{
            scale: 0,
            duration: 0.3,
            ease: "power4.easeout"
        })
        gsap.to("#innercircle1 h1",{
            scale: 0.7,
            opacity: 0,
            delay: 0.3,
            duration: 0.3,
            ease: "power4.easeout"
        })
    })
    circle2.addEventListener("mouseover", function(){
        gsap.to("#innercircle2",{
            scale: 1,
            duration: 0.3,
            ease: "power4.easeout"
        })
        gsap.to("#innercircle2 h1",{
            scale: 1,
            opacity: 1,
            delay: 0.3,
            duration: 0.3,
            ease: "power4.easeout"
        })
    })
    circle2.addEventListener("mouseleave", function(){
        gsap.to(`#innercircle2`,{
            scale: 0,
            duration: 0.3,
            ease: "power4.easeout"
        })
        gsap.to("#innercircle2 h1",{
            scale: 0.7,
            opacity: 0,
            delay: 0.3,
            duration: 0.3,
            ease: "power4.easeout"
        })
    })
    circle3.addEventListener("mouseover", function(){
        gsap.to("#innercircle3",{
            scale: 1,
            duration: 0.3,
            ease: "power4.easeout"
        })
        gsap.to("#innercircle3 h1",{
            scale: 1,
            opacity: 1,
            delay: 0.3,
            duration: 0.3,
            ease: "power4.easeout"
        })
    })
    circle3.addEventListener("mouseleave", function(){
        gsap.to(`#innercircle3`,{
            scale: 0,
            duration: 0.3,
            ease: "power4.easeout"
        })
        gsap.to("#innercircle3 h1",{
            scale: 0.7,
            opacity: 0,
            delay: 0.3,
            duration: 0.3,
            ease: "power4.easeout"
        })
    })
    

    var firstcard = document.querySelectorAll(".firstcard");
    firstcard.forEach((elem,index)=>{
        elem.addEventListener("mouseover", function(){
            gsap.to(`.cardheadingtext${index}`,{
                y: "-100%",
                duration: 0.6,
                ease: "power4.easeout"
            })
        })
        elem.addEventListener("mouseleave", function(){
            gsap.to(`.cardheadingtext${index}`,{
                y: "0%",
                duration: 0.6,
                ease: "power4.easeout"
            })
        })
    })
    var videocursor = document.querySelector("#videocursor");
    var videocontainer = document.querySelector("#videocontainer");
    var video = document.querySelector("#video video");
    videocontainer.addEventListener("mousemove", function(elem){
        gsap.to("#videocursor",{
            left: elem.clientX-400,
            y: elem.clientY-210,
        })
        gsap.to("#cursor",{
           opacity: 0,
        })
    })
    videocontainer.addEventListener("wheel", function(elem){
        gsap.to("#videocursor",{
            y: "-16%",
            right: "0%",
            duration:0.8, 
        })
        gsap.to("#cursor",{
           opacity: 1,
        })
    })
    videocontainer.addEventListener("mouseenter", function(elem){
        gsap.to("#videocursor",{
            left: elem.clientX-400,
            y: elem.clientY-210,
            duration: 0.8,
        })
        gsap.to("#cursor",{
           opacity: 0,
        })
    })
    var flag = false;
    videocontainer.addEventListener("click", function(){
        if(flag === false){
            video.play();
            gsap.to("#videoimg",{
                opacity: 0,
                duration:0.2,
            })
            videocursor.innerHTML = `<i class="ri-pause-large-line"></i>`
            gsap.to("#videocursor",{
                scale: 0.6,
                duration:0.4,
            })
            flag = true;
        }
        else{
            video.pause();
            gsap.to("#videoimg",{
                opacity: 1,
                duration:0.2,
            })
            videocursor.innerHTML = `<i class="ri-play-large-fill"></i>`
            gsap.to("#videocursor",{
                scale: 1,
                duration:0.4,
            })
            flag = false;
        }

    })
    videocontainer.addEventListener("mouseleave", function(){
        gsap.to("#videocursor",{
            y: "-16%",
            right: "-16%",
            duration:0.8,
        })
        gsap.to("#cursor",{
           opacity: 1,
        })
    })
    window.addEventListener("mousemove", function(elem){
        gsap.to("#flag",{
            left: elem.clientX,
            top: elem.clientY,
            duration: 0.2,
        })
    })
    var special = document.querySelector("#special");
    special.addEventListener("mouseover", function(){
        gsap.to("#flag",{
            opacity: 1,
            duration: 0.3,
        })
    })
    special.addEventListener("mouseleave", function(){
        gsap.to("#flag",{
            opacity: 0,
            duration: 0.3,
        })
    })

    const targetElements = document.querySelectorAll('.cardunderline');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = '100%';
            }
        });
    });

    targetElements.forEach(element => observer.observe(element));

    gsap.from("#page4heading",{
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger:" #page4heading h1",
            scroller: "main",
            start: "top 80%",
            end: "top 60%"
        },
        onStart: function(){
            gsap.from("#page4part2 p",{
                y: 100,
                opacity: 0,
                duration:0.7,
                stagger: 0.06,
            })
            gsap.to(".underline",{
                width: "145%",
                duration:0.8,
            })
        }
    })


})