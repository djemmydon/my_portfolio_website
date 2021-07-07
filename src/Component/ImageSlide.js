import React, { useState } from 'react'
import { Image } from './Image'
import './image-slider.css'
import Slider from "react-slick";


import image2 from './img/img-8.jpg'
import image3 from './img/img-1.jpg'
import image4 from './img/img-6.jpg'

const slideData = [image2, image3, image4]

const ImageSlide = ({ slides }) => {

    const settings = {
        dots: true,
        lazyLoad:true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slideToShow: 3,
        centerPadding:0,
        centerMode:true,
      
    };

    return (
        <div className='slider'>
            <Slider>
               
                          {
                              slideData.map((img, idx) => {
                                  <div>
                                      <img src={img} alt="" />
                                  </div>
                              })
                          }
          
            </Slider>
            
        </div>
    )
}

export default ImageSlide

