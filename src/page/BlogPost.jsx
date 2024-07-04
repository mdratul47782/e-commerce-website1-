import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Footer from '../Component/Footerr'
import Navigation from '../Component/Navigation'

const BlogPost = () => {
    return (
        <>
            <Navigation />
            <div className='ms-5 me-5'>
                <Stack direction="horizontal" gap={3} className='d-flex align-items-center justify-content-center mt-5'>
                    <Form.Control className="me-auto" placeholder="Write the product name ... " />
                    <Form.Control className="me-auto" placeholder="Add your blog here..." />
                    <Button variant="secondary">Submit</Button>
                </Stack>
            </div>
            <div className='mt-5 ms-5 me-5'>
                <Card className='mt-5'>
                    <Card.Header as="h5">Joy Pal</Card.Header>
                    <Card.Body>
                        <Card.Title>Annibale Colombo Bed</Card.Title>
                        <Card.Text>
                            The bed is very comfortable. It also increase my bedroom beauty. Thanks Shopcart. I am a happy customer.
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
                <Card className='mt-5'>
                    <Card.Header as="h5">Arafatulla Al Moaz</Card.Header>
                    <Card.Body>
                        <Card.Title>Dior J'adore</Card.Title>
                        <Card.Text>
                            The perfume is awsome. Shopcart give me this in reasonable price. Thanks.
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
                <Card className='mt-5'>
                    <Card.Header as="h5">Md. Ratul</Card.Header>
                    <Card.Body>
                        <Card.Title>Eyeshadow Palette with Mirror</Card.Title>
                        <Card.Text>
                            This beauty product is good. My wife is happy then I am happy.
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
                <Card className='mt-5'>
                    <Card.Header as="h5">Tanzid Uddin</Card.Header>
                    <Card.Body>
                        <Card.Title>Grocery - Beef</Card.Title>
                        <Card.Text>
                            In the market the beef is $750 but shopcart sell me this in $700. The quality is good. Cheers.
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
                <Card className='mt-5'>
                    <Card.Header as="h5">ABdul Kuddus Ali Kha</Card.Header>
                    <Card.Body>
                        <Card.Title>Groceries</Card.Title>
                        <Card.Text>
                            I found every groceries in the shopcart. I just ordered online and the products are in my home at just 15 minutes. Thanks.
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            </div>

            <Footer />

        </>
    )
}

export default BlogPost