import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
   <>
   
     {/* footer */}

     <div className="container">
          <Row>
            <Col lg={3} md={6} sm={12} xs={12}>
              <ul className='mt-5'>
                <li className='fw-semibold'>Get In Touch</li>
                <li className='mt-2'>487 Eight Avenue West Street ,<br />New York</li>
                <li className='mt-2'>+123 456 7890</li>
                <li className='mt-1'>Email@gmail.com</li>
                <li className='mt-2 ms-2'><FaFacebookF /> <FaInstagram /> <FaTwitter /></li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <ul className='mt-5'>
                <li className='fw-semibold'>Information</li>
                <li className='mt-2'>Product Support</li>
                <li className='mt-1'>Chekout</li>
                <li className='mt-1'>Licence Policy</li>
                <li className='mt-1'>Affiliate</li>
                <li className='mt-1'>Locality</li>
                <li className='mt-1'>About us</li>
                <li className='mt-1'>My account</li>
                <li className='mt-1'>Pricing Table</li>
                <li className='mt-1'>Tabs</li>


              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <ul className='mt-5'>
                <li className='fw-semibold'>Customer Service</li>
                <li className='mt-1'>Serch Terms</li>
                <li className='mt-1'>Advanced Search</li>
                <li className='mt-1'>Order and Returns</li>
                <li className='mt-1'>Contact Us</li>
                <li className='mt-1'>Theme FAQs</li>
                <li className='mt-1'>Consultant</li>
                <li className='mt-1'>Store Locations</li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <ul className='mt-5'>
                <li className='fw-semibold'>Stay In Touch</li>
                <li className='mt-2'>Receive our latest updates about our product & promotion</li>
                <input className='mt-4 p-2' placeholder='Enter Your Email ' type="email" /><br></br>
                <button className='subscribe mt-4'>SUBSCRIBE</button>
              </ul>
            </Col>
          </Row>
        </div>


        {/* end */}

        <div className="container border-top ">
          <div className='end mt-3 text-center'>2022 - Ecommerce Software by PrestaShop <sup>TM</sup> </div>
          <div className='border-bottom mt-3'></div>
        </div>
   
   </>
  )
}

export default Footer