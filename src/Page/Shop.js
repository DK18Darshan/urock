import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Getproductaction from '../redux/action/Productaction';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Shop() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.GetProduct.getProduct)
    useEffect(() => {
        dispatch(Getproductaction())
    }, [])
    return (
        <>
            <Row className='g-4 container m-auto'>
                {products.map((e) => {
                    return (
                        <>
                            <Col className='col-md-4'>
                                <Link to={`/single/${e._id}`}  >
                                    <Card className='border' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={require('../images/cat4.jpg')} />
                                        <Card.Body>
                                            <Card.Title>{e.productname}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </>
                    )
                })}
            </Row>







        </>
    )
}

export default Shop