import React from 'react'
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap'

import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import MapImg from '../assets/map.webp'

export default function ContactPage() {
  return (
    <div>
        <header className="App-header">
          <AppNavbar />
        </header>

        <Container>
            <Row className='py-5'>
              <h1 className='dancing-script my-5 text-center'>Contact Us</h1>

              <Col lg={12} xl={4}>
                      <div>
                          <Image src={MapImg} fluid/>
                      </div>
                    </Col>

                    <Col lg={12} xl={4} className='pt-5 px-5'>

                    <Form>
                      <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Button variant="dark">Submit</Button>
                    </Form>

                    </Col>
                    <Col lg={12} xl={4} className="py-5 px-5">
                      <p>999 Marouns Ave, Los Marounes CA 99999</p>
                      <p>Tuesday - Saturday : 10am – 7pm</p>
                      <p>Sunday - Monday : 10am – 6pm</p>
                      <p>+1 (000) 000-000</p>
                      <p>example@hairstudio.com</p>

                      <Row className="py-2">
                        <Col xs="auto" sm="auto" md="auto" lg="auto" className="m-1"><a href='#'><i class="fa-brands fa-facebook-f"></i></a></Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" className="m-1"><a href='#'><i class="fa-brands fa-instagram"></i></a></Col>
                      </Row>
                    </Col>


            </Row>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
