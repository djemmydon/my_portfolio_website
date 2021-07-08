import React, { useEffect } from 'react'
import './form.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Img1 from './img/apple.png'
import Img2 from './img/img-5.jpg'
import Img3 from './img/img-6.jpg'
import './photo-about-me.css'
function PhotoAboutMe() {

    useEffect (() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (

        
        <div    className='container about-us'>
                 <h2 className="lined text-uppercase text-center">DOCUMENT</h2    >
            <div data-aos='fade-up' className="rowling">
                
                <a href="https://github.com/djemmydon/Brandistarforme">
                <div className=" text-center">
          
               <div className="card">
                   <img src={Img1} alt="" />
                   <div className="card-text">
                       <h3>BRANDISTAR</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt repellat corrupti </p>
                   </div>
                    </div>
               </div>
</a>

                <a href="https://github.com/djemmydon/TO-DO-LIST">
                <div className=" text-center">
                    <div className="card">
                        <img src={Img2} alt="" />
                        <div className="card-text">
                            <h3>TODO-LIST</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt repellat corrupti </p>
                        </div>
                    </div>
                </div>
                </a>

                <a href="https://github.com/djemmydon/second-repo">
                <div className=" ">
                    <div className="card">
                        <img src={Img3} alt="" />
                        <div className="card-text text-center">
                            <h3>Emmydon</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt repellat corrupti </p>
                        </div>
                    </div>
                </div>

                </a>
           </div>
        
        </div>
    )
}

export default PhotoAboutMe
