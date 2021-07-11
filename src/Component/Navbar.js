import React, { useEffect } from 'react'
import './form.css'
import Aos from 'aos';
import '../Component/navbar.css'
import Typical from 'react-typical'

import Mypic from './img/image-1.png'

function Navbar() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <>
        <div className='container-fluid all-main'>
            

                <div   className='welcome'>
                <div className='row'>

                        <div data-aos='fade-down' className="col-md-6 col-lg-6 col-xs-12 text-me">
                <h2>i am Patrick</h2>

                    <h3 className='type-script'>
                    <Typical 
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                      

                        ' Web Designer',
                        6000,
                        
                        ' Graphic Designer',
                        6000,
                    ]}
                    
                    />
                </h3>
                

                
                
                <div className="btn-edit">
             <a href="Form">     <button className='button-1'>
                  Message
                </button></a>
                </div>
                        </div>

                        <div data-aos='fade-up' className=" welcome-picture col-md-6 col-sm-6 col-xs-12">
                            <img className='mypic' src={Mypic} alt="" />
                        </div>



                        </div>
                </div>
                </div>
   
 
        
  

            </>
    )
}

export default Navbar
