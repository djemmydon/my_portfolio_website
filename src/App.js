import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './Component/navbar.css';

import PhotoAboutMe from './Component/PhotoAboutMe';
import Nav from './Component/Nav'
import Navbar from './Component/Navbar';
import Form from './Component/Form'
import Post from './Component/Post';
import Aos from 'aos';
import 'aos/dist/aos.css'
import HashLoader from "react-spinners/HashLoader";
import About from './Component/About';
import Footer from './Component/Footer';
function App() {
const [loading, setLoading] = useState(false);
  let [speedMultiplier, setSpeedMultiplier] = useState(2);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

 useEffect(() => {
    Aos.init({duration:3000})
 },[])
  return (
    <div className='App'>
   
      {
        loading ?
         <div className='load'> <HashLoader speedMultiplier={speedMultiplier} color={'red'} loading={loading}  size={90} />
         <h1>Welcome to my Website</h1>
         </div>
        :
 <Router>
        <Navbar />
         <Nav />
    
   
            <Post />
    <PhotoAboutMe />
    <About />
    <Form  />
    <Footer />

      </Router>
      }

     
  
    </div>
  );
}

export default App;
