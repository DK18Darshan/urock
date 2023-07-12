import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { FaGift, FaLock, FaPercent, FaTruck, IconName } from "react-icons/fa";

function Feature() {
  return (
    <>
    {/* main-icon */}
    <div className='mt-2 border-bottom container'>
    <marquee direction="right" > 
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title className='text-center fs-1 icon'><FaPercent /></Card.Title>
              <div className='text1 text-center mt-3 fs-5 fw-semibold'>Flat Special Discount</div>
              <Card.Text>

              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='text-center fs-1 icon'><FaGift /></Card.Title>
              <div className='text1 text-center mt-3 fs-5 fw-semibold'>Special Gift Vouchers</div>
              <Card.Text>

              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='text-center fs-1 icon'><FaTruck /></Card.Title>
              <div className='text1 text-center mt-3 fs-5 fw-semibold'>Fast Free Delivery</div>
              <Card.Text>

              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='text-center fs-1 icon'><FaLock /></Card.Title>
              <div className='text1 text-center mt-3 fs-5 fw-semibold'>100% Secure Shopping</div>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
    </marquee>
      </div>
    </>
  )
}

export default Feature