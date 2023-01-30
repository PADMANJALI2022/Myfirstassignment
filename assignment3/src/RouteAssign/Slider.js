import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Slider.css'
const Slider = () => {

  return ( 
    <div> 
    <center>
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src='https://blog.openreplay.com/images/routing-with-react-router-6/images/hero.png'
          alt="First slide"
        /> <br></br>
        <br></br>
        <Carousel.Caption>
        <br></br>
        <br></br>
        <p>Slide1</p>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.cronj.com/blog/wp-content/uploads/Whats-in-there.png"
          alt="Second slide"
        /><br></br>
        <br></br>
        <Carousel.Caption>
          
          <p>Slide2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} >
        <img
          className="d-block w-100"
          src="https://www.jstopics.com/_next/image?url=%2Fimages%2Fcovers%2Freact-router-v6-redirect.jpeg&w=1920&q=75"
          alt="Third slide"
        />
        <br></br>
        <br></br>
        <Carousel.Caption>
        
          <p>
          Slide3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>
    </div>
  )
}

export default Slider