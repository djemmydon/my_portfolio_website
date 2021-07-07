
import { Link } from 'react-scroll'
import React, { useState, useEffect } from 'react';

import './nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Post from './Post';
function Nav() {
  

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div className='all-nav'>
            <div className='bg-nav'  >
                <motion.div className='logo'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    <Link to='/' >
                        <h3>PECULIAR</h3>
                    </Link>
                </motion.div>

                <div className="web-logo">
                    <a href="https://web.facebook.com/patrick.emmydon/"><i className='fab fa-facebook-f'></i></a>

                    <a href="https://wa.me/+2349065192164"><i className='fab fa-whatsapp'></i></a>

                    <a href="https://github.com/djemmydon"><i className='fab fa-github'></i></a>

                </div>

                <div clsssName='nav'>

                    <ul className={click ? 'nav-items active' : 'nav-items'}>
                        <li className='nav-link'>
                            <Link to='all-main' smooth={true} className='link-sty'>home</Link>
                        </li>

                        <li className='nav-link'>
                            <Link to='what-i-do' smooth={true} className='link-sty'>services</Link>
                        </li>


                        <li className='nav-link'>
                            <Link to='about-us' smooth={true}className='link-sty'>document</Link>
                        </li>

                         <li className='nav-link'>
                            <Link to='curved ' smooth={true} className='link-sty'>About</Link>
                        </li>

                        <li className='nav-link'>
                            <Link to='Form' smooth={true} className='link-sty' >contact</Link>
                        </li>


                    </ul>

                    <div className='menu-icons' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

            </div>
            </div>
        </div>
    )
}

export default Nav
