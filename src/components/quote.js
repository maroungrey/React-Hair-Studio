import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AppQuote() {
  return (
    <Container>
    <Row>
        <Col>
            <div className='mx-auto my-5 text-center'>
                <h1 className='dancing-script'>Your hair, our canvas</h1>
                <br></br>
                <p>Hair Studio offers a full range of custom hair services.</p>
                <p>Our professionally trained staff have decades of combined experience and the team of stylists and supporting staff were meticulously selected by the Director stylist Maroun Grey</p>
            </div>
        </Col>
    </Row>
  </Container>
  )
}
