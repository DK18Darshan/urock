import React from 'react'
import { Carousel } from 'react-bootstrap'

function Slider() {
  return (
  <>
   {/* slider */}
   <div className='slider'>
        <Carousel controls={true} fade  indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/1.jpg')}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/2.jpg')}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
  
  
  
  </>
  )
}

export default Slider