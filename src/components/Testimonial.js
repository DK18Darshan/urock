import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Testimonial() {
  return (
   <>
     {/* testimonials */}
     <div className="container mt-5 d-flex" >
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className='testi1 '>
              <img src={require('../images/Testi.jpg')}></img>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className='testi-txt'>
            <div className='col-12 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam dignissimos culpa tempora autem, doloremque repellat quas? Unde, accusantium at? At numquam illo odit, voluptates veritatis deleniti quam voluptas neque?
            </div>
          </Col>
        </Row>
      </div>
   
   
   </>
  )
}

export default Testimonial