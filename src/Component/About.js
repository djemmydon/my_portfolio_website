import React, { useEffect } from 'react'
import './form.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from './img/emmyd.jpg'
import './about.css'

function About() {
    useEffect (() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        
        <div data-aos='fade-down'  className='curved container'>

            
<div className="item-s">
               
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

                <h2 class="lining text-uppercase text-center">ABOUT ME.</h2    >
           <div  >

                    <img data-aos='fade-up'  className="ima"src={Image}alt="" />
           </div>

           <div className="about-text text-center">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium vero ullam! Sint id, perferendis animi eum corrupti sunt harum aliquid .</p>
           </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L48,37.3C96,75,192,149,288,181.3C384,213,480,203,576,176C672,149,768,107,864,90.7C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        </div>
    )
}

export default About
