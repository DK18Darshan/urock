import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function Category() {
  return (
   <>
   
     {/* collection-1 */}

     <div className='page1 mt-5 container m-auto'>
        <h6 className='text-center'>NEW COLLECTION</h6>
        <h3 className='text-center'>Shop By Collection</h3>

        <CardGroup className='mt-4 gx-4 c1'>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('../images/cat1.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('../images/cat2.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('../images/cat3.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
        </CardGroup>
        <CardGroup className='mt-3 c1'>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('../images/cat4.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('../images/cat5.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('../images/cat6.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
        </CardGroup>

      </div>
      {/* collection-2 */}
      <div className='page2 mt-5 container m-auto  '>

        <h6 className='text-center'>NEW COLLECTION</h6>
        <h3 className='text-center'>Shop By Collection</h3>
        <CardGroup className='mt-4'>
          <Card className='border cat2'>
            <Card.Img variant="top" className='' src={require('../images/Pro/1.jpg')} />
            <div className='cat2txt'>
              {/* <div className='buytxt'><a>-20%</a></div> */}
              <div className='cat2icon mt-2'></div>
            </div>
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('../images/Pro/2.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('../images/Pro/3.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('../images/Pro/4.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('../images/Pro/5.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
        </CardGroup>
      </div>
   </>
  )
}

export default Category