import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import './post.css'

function Post() {

    useEffect  (() => {
        Aos.init({ duration: 2000 })
    }, []);


    return (

        <div data-aos = 'fade-left '>

            <div className="what-i-do container">
                <h2 class="lined text-uppercase text-center">SERVICES</h2>
                <div className="row text-center">
                    <div className="main-do  col-lg-4">

                        <h3>Design + Development</h3>
                        <i className='fas fa-mobile icons'></i>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore omnis optio ratione fugit beatae obcaecati harum ea eum dolorem autem!</p>
                        <Link to=''>
                            <button className='button-1'>Explore</button>
                        </Link>
                    </div>

                    <div className="main-do col-lg-4">
                        <h3>GRAPHIC DESIGNER</h3>
                        <i className='fas fa-cogs icons'></i>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore omnis optio ratione fugit beatae obcaecati harum ea eum dolorem autem!</p>
                        <Link to=''>
                            <button className='button-1'>Explore</button>
                        </Link>
                    </div>

                    <div className="main-do col-lg-4 ">
                        <h3>DISK JOCKEY</h3>
                        <i className='fas fa-laptop icons'></i>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore omnis optio ratione fugit beatae obcaecati harum ea eum dolorem autem!</p>
                        <Link to=''>
                            <button className='button-1'>Explore</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Post
