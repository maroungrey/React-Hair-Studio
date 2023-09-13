import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import WorkHoursImg from '../assets/work-hours.webp';

export default function WorkingHours() {
  return (
    <div>
        <section className='my-5 py-5 theme-color'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='px-3 center-vertically'>
                            <Image src={WorkHoursImg} fluid/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='px-3 mt-3 px-4 text-center text-lg-left '>
                            <h1>Working Hours</h1>
                            <p>Open 7 days a week. Walk-Ins are welcomed.</p>
                            <p>Tuesday – Saturday …………….. 10AM – 7PM</p>
                            <p>Sunday – Monday …………………. 10AM – 6PM</p>
                            <a href="/book">
                                <Button variant="dark">Book Appointment</Button>
                            </a>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}
