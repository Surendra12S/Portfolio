import './Home.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


function Home() {
    const headingRef = useRef();
    const buttonRef = useRef(null);
  const itemsRef = useRef([]);
  const tl = useRef();


    const splitText = (text) => {
        return text.split("").map((char, index) => (
            <span key={index} className="h1-letter">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    useGSAP(() => {
        gsap.from(headingRef.current.querySelectorAll(".h1-letter"), {
            opacity: 0,
            y: 100,
            duration: 1,
            delay: 3.5,
            ease: "back.out(1.7)",
            stagger: 0.05,
        });

        gsap.from(headingRef.current.querySelector("h2"), {
            opacity: 0,
            y: 50,
            delay: 4.5,
            duration: 1,
            ease: "power4.out"
        });

    }, { scope: headingRef });



     useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(itemsRef.current, {
      x: () => gsap.utils.random(-60, 60),
      y: () => gsap.utils.random(-40, 40),
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.05
    });
  });

  const handleMouseEnter = () => {
    tl.current.invalidate().restart(); 
  };

  const handleMouseLeave = () => {
    tl.current.reverse(); 
  };

  useGSAP(()=>{
    gsap.from(".DownloadCvBtn",{
         opacity: 0,
            y: 50,
            delay: 5,
            duration: 1.5,
            ease: "power4.out"
    })
  })

    return (
        <div className="mainHeadingContainer">
             <div className="grid-container">
      <div className="grid-background" />
      <div className="grid-mask" />
   
            <div className='headings' ref={headingRef}>
                <h1>{splitText("Hi,I'm Surendra")}</h1>
                <h2 >Full Stack Web Developer</h2>
            </div>
            <div className='DownloadCvBtn'>
                <button
                    className="animated-btn"
                    ref={buttonRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Download CV
                    <span className="burst-item" ref={(el) => (itemsRef.current[0] = el)}>➔</span>
                    <span className="burst-item" ref={(el) => (itemsRef.current[1] = el)}>★</span>
                    <span className="burst-item" ref={(el) => (itemsRef.current[2] = el)}>⚙️</span>
                </button>
            </div>
            </div>
        </div>
    );
}

export default Home;
