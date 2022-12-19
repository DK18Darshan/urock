
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Carousel, Card, CardGroup, Container } from 'react-bootstrap';
import { FaGift, FaPercent, FaTruck, FaLock, FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>

      {/* header line */}

      <div className='main'> Mid-Season Sale Up  To 70% Off.</div>


      {/* navbar */}

      <div className='header'>
        <Navbar bg="light" expand="lg"  >
          <Container>
            <Navbar.Brand href="#">
              <div className='logo'>
                <img src={require('./images/logo.png')}></img>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
              <Nav
                className="my-2 my-lg-0 head1 ms-auto"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="#action1">HOME</Nav.Link>
                <Nav.Link href="#action2">SHOP</Nav.Link>
                <Nav.Link href="#a ction3">PAGE</Nav.Link>
                <Nav.Link href="#action3">BLOG</Nav.Link>
                <Nav.Link href="#action3">LOOKBOOK</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
             {/* slider */}
    <div className='slider'>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/1.jpg')}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
      {/* main-icon */}

      <div className='mt-2 border-bottom'>
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
      </div>

      {/* collection-1 */}

      <div className='page1 mt-5 container m-auto'>
        <h6 className='text-center'>NEW COLLECTION</h6>
        <h3 className='text-center'>Shop By Collection</h3>

        <CardGroup className='mt-4 gx-4 c1'>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('./images/cat1.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('./images/cat2.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('./images/cat3.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
        </CardGroup>
        <CardGroup className='mt-3 c1'>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('./images/cat4.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('./images/cat5.jpg')} />
            <div className='text'>
              <div className='buy'><a>Buy Now</a></div>
            </div>
          </Card>
          <Card className='cat1'>
            <Card.Img variant="top" src={require('./images/cat6.jpg')} />
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
            <Card.Img variant="top" className='' src={require('./images/Pro/1.jpg')} />
            <div className='cat2txt'>
              {/* <div className='buytxt'><a>-20%</a></div> */}
              <div className='cat2icon mt-2'><FaShoppingCart /></div>
            </div>
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('./images/Pro/2.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('./images/Pro/3.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('./images/Pro/4.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
          <Card className='border ms-2 cat1'>
            <Card.Img variant="top" className='' src={require('./images/Pro/5.jpg')} />
            <div className='fs-6 m-2'>CRESTAL SHINE </div>
          </Card>
        </CardGroup>
      </div>


      {/* testimonials */}


      <div className="container mt-5 d-flex" >
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className='testi1 '>
              <img src={require('./images/Testi.jpg')}></img>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className='testi-txt'>
            <div className='col-12 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam dignissimos culpa tempora autem, doloremque repellat quas? Unde, accusantium at? At numquam illo odit, voluptates veritatis deleniti quam voluptas neque?
            </div>
          </Col>
        </Row>
      </div>

      {/* popular items */}
      <Row className=' mt-5 m-auto'>
        <Col lg={6} md={12} sm={12} xs={12} className='cm1'>
          <img src={require('./images/cm1.jpg')}></img>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className='cm2'>
          <img src={require('./images/cm2.jpg')}></img>
        </Col>
      </Row>


      {/* top selling item */}

      <div className='page2 mt-5 container m-auto  '>


        <h6 className='text-center'>NEW COLLECTION</h6>
        <h3 className='text-center'>Top Selling Items</h3>

        <CardGroup className='mt-4'>
          <Card className='border topsell'>
            <Card.Img variant="top" className='' src={require('./images/Pro/1.jpg')} />
            <div className='m-2 cardtxt'>CRYSTAL SHINE </div>
            <div className='ms-2'>Special Gift Voucher Special Gift Voucher</div>
            <p className='fw-semibold ms-2'><s>350$</s> 300$</p>
          </Card>
          <Card className='border ms-2'>
            <Card.Img variant="top" className='' src={require('./images/Pro/2.jpg')} />
            <div className='m-2 cardtxt'>CRYSTAL SHINE </div>
            <div className='ms-2'>Special Gift Voucher Special Gift Voucher</div>
            <p className='fw-semibold ms-2'><s>350$</s> 300$</p>
          </Card>
          <Card className='border ms-2'>
            <Card.Img variant="top" className='' src={require('./images/Pro/3.jpg')} />
            <div className='m-2 cardtxt'>CRYSTAL SHINE </div>
            <div className='ms-2'>Special Gift Voucher Special Gift Voucher</div>
            <p className='fw-semibold ms-2'><s>350$</s> 300$</p>
          </Card>
          <Card className='border ms-2'>
            <Card.Img variant="top" className='' src={require('./images/Pro/4.jpg')} />
            <div className='m-2 cardtxt'>CRYSTAL SHINE </div>
            <div className='ms-2'>Special Gift Voucher Special Gift Voucher</div>
            <p className='fw-semibold ms-2'><s>350$</s> 300$</p>
          </Card>
          <Card className='border ms-2'>
            <Card.Img variant="top" className='' src={require('./images/Pro/5.jpg')} />
            <div className='m-2 cardtxt'>CRYSTAL SHINE </div>
            <div className='ms-2'>Special Gift Voucher Special Gift Voucher</div>
            <p className='fw-semibold ms-2'><s>350$</s> 300$</p>
          </Card>
        </CardGroup>


        {/* letest  products*/}


        <div className='cardtxt text-center mt-5'>Letest News</div>
        <h1 className='text-center mt-2'>From Our Blog</h1>
        <CardGroup className='mt-5 c1'>
          <Card className='border'>
            <Card.Img variant="top" src={require('./images/Blog-01.jpg')} />
            <h6 className='mt-3 ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
            <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus fugiat placeat pariatur illum illo </div>
            <span className='blogtxt'>02 july,2022</span>
          </Card>
          <Card className='border'>
            <Card.Img variant="top" src={require('./images/Blog-02.jpg')} />
            <h6 className='mt-3 ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
            <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus fugiat placeat pariatur illum illo </div>
            <span className='blogtxt'>02 july,2022</span>
          </Card>
          <Card className='border'>
            <Card.Img variant="top" src={require('./images/Blog-03.jpg')} />
            <h6 className='mt-3 ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
            <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus fugiat placeat pariatur illum illo.</div>
            <span className='blogtxt'>02  july,2022</span>
          </Card>
        </CardGroup>

        {/* footer */}

        <div className="container">
          <Row>
            <Col lg={3} md={6} sm={12} xs={12}>
              <ul className='mt-5'>
                <li className='fw-semibold'>Get In Touch</li>
                <li className='mt-2'>487 Eight Avenue West Street ,<br />New York</li>
                <li className='mt-2'>+123 456 7890</li>
                <li className='mt-1'>Email@gmail.com</li>
                <li className='mt-2 ms-2'><FaFacebookF /> <FaInstagram /> <FaTwitter /> <TfiYoutube /></li>
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
                <input className='mt-4' placeholder='Enter Your Email ' type="email" /><br></br>
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
      </div>

    </>
  );
}

export default App;
