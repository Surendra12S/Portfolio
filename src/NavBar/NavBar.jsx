import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './NavBar.css';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


function NavBar() {

    const navRef = useRef(null);
    const navLinkRef = useRef(null);
    const navBrandRef = useRef(null);

    useGSAP(() => {
        gsap.from(".nav-links li", {
            y: -20,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.3,
            ease: "easeInOut"
        })
    }, { scope: navLinkRef });

    useGSAP(() => {
        gsap.from(".nav-brand h1", {
            y: -20,
            opacity: 0,
            duration: 0.5,
            delay: 0.5
        })

    })

    useGSAP(() => {
        gsap.to(".nav-underline", {
            duration: 2,
            delay: 2.5,
            width: "100%",
            ease: "power3"
        })
    })


    useGSAP(() => {
        gsap.to('.navbar',{
            scrollTrigger: {
                trigger: '.navbar',
                start: 'bottom top',
                toggleActions: 'play none none reverse'
            },
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            ease: 'power1.inOut'
        });
    });



    return (
        <div className="nav-container" ref={navRef} >
            <nav className="navbar">
                <div ref={navBrandRef} className='nav-brand'>
                    <h1>Surendra Dasari</h1>
                </div>
                <div ref={navLinkRef} className='nav-links'>
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
            <div className='nav-underline'>
               
            </div>
            
        </div>
    )

}
export default NavBar;
