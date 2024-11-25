gsap.registerPlugin(ScrollTrigger);    

if (window.innerWidth > 500) {

    gsap.to(".frontSection", {
    scrollTrigger: {
        trigger: ".frontSection",
        start: "95% 25%",
        end: "95% 5%",
        scrub: true,
    },  
        width: "95vw",
        ease: "sine.inOut",
        borderRadius: "50px",
    });
    gsap.to(".s0", {
    scrollTrigger: {
        trigger: ".frontSection",
        start: "95% 25%",
        end: "95% 5%",
        scrub: true,
    },  
        width: "95vw",
        ease: "sine.inOut",
    });

    gsap.to(".s1-h", {
    scrollTrigger: {
        trigger: ".section1",
        start: "20% 13%",
        end: "center 0%",
        scrub: true,
    },  
        transform: "translateY(-5vw)",
        filter: "blur(100px)",
        fontSize: "4.5vw",
        lineHeight: "4vw",
        ease: "sine.inOut",
    });
    
        gsap.to(".para-s1", {
        scrollTrigger: {
            trigger: ".section1",
            start: "20% 13%",
            end: "center 0%",
            scrub: true,
        },  
        transform: "translateY(-1.5vw)",
            filter: "blur(100px)",
            opacity: 0,
            ease: "sine.inOut",
        });
        
        
        gsap.to(".sphere2", {
        scrollTrigger: {
            trigger: ".section1",
            start: "60% 40%",
            end: "100% 20%",
            scrub: true,
        },
        transform: "translateY(22vw)",
            filter: "blur(20px)",
            opacity:0,
        });
        gsap.to(".s1-video", {
        scrollTrigger: {
            trigger: ".section1",
            start: "60% 40%",
            end: "100% 20%",
            scrub: true,
        },  
            width: "70vw", 
        });

        
        gsap.to(".vid-1", {
            scrollTrigger: {
        trigger: ".section2",
        start: "-6% 40%",
        end: "4% 40%",
        scrub: true,
    },  
    width: "40vw",
    boxShadow: "0px 0px 0px 0px rgba(95, 46, 232, 0.851)",
    ease: "sine.inOut",
});

    gsap.to(".vid-1", {
    scrollTrigger: {
        trigger: ".section2",
        start: "23% 40%",
        end: "45% 40%",
        scrub: true,
    },
        transform: "translateY(-2vw)",
        opacity: 0,
    });
    gsap.to(".vid-2", {
    scrollTrigger: {
        trigger: ".section2",
        start: "38% 40%",
        end: "70% 40%",
        scrub: true,    
    },  
        width: "38vw",
        transform: "translateY(-2vw)",
        opacity: 0,
    });
    gsap.to(".vid-3", {
    scrollTrigger: {
        trigger: ".section2",
        start: "55% 40%",
        end: "90% 40%",
        scrub: true,
    },  
        width: "38vw",
        transform: "translateY(-2vw)",
        opacity: 0,
    });
    gsap.to(".vid-4", {
    scrollTrigger: {
        trigger: ".section2",
        start: "75% 40%",
        end: "95% 40%",
        scrub: true,
        // markers: true,
    },  
        width: "38vw",
        transform: "translateY(-2vw)",
        opacity: 0,
    });

    gsap.to(".c1", {
        scrollTrigger: {
            trigger: ".section2",
            start: "11% 40%",
            end: "25% 40%",
            scrub: true,
        },
            filter: "blur(30px)",
            opacity: 0,
        });
    gsap.to(".c2", {
        scrollTrigger: {
            trigger: ".section2",
            start: "30% 40%",
            end: "42% 40%",
            scrub: true,
        },
            filter: "blur(30px)",
            opacity: 0,
        });
    gsap.to(".c3", {
        scrollTrigger: {
            trigger: ".section2",
            start: "50% 40%",
            end: "62% 40%",
            scrub: true,
        },
            filter: "blur(30px)",
            opacity: 0,
        });
    gsap.to(".c4", {
        scrollTrigger: {
            trigger: ".section2",
            start: "69% 40%",
            end: "80% 40%",
            scrub: true,
        },
            filter: "blur(30px)",
            opacity: 0,
        });
}