import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import DescriptionImg from '../assets/desc2.jpg'
import Button from 'react-bootstrap/Button';

export default function AppDescription() {
  return (
    <Container className='my-5'>
        <Row>

            <Col lg={6}>
                <Image src={DescriptionImg} fluid/>
            </Col>

            <Col lg={6}>
                <div className='mx-auto my-5 text-center text-lg-left'>
                    <h1>Los Marounes Hair Salon</h1>
                    <p>Professional highly trained and skilled hair stylists to glam you up for every special occasion.
Find out why Hair Salon by Maroun is the highest-rated hair salon on Yelp and Google!
Hair Salon by Maroun is a hair salon located in Los Marounes in the heart of Marountown. Specialties include but are not limited to: balayage, digital setting perms, refresh perms, magic straight perms, root touch up, the latest styles of haircuts for women and men, and hair treatments such as keratin and Mucota. Staffed by artistic stylists who have mastered their craft, Hair Salon by Maroun is arguably one of the best hair salons in all of California. We have built strong relationships with our clients throughout the years; many of whom are Korean and American celebrities and social media influencers! We follow strict COVID-19 Protection & Health Guidelines in order to protect both clients and staff.</p>
                </div>
                <Button variant="dark">Book Appointment</Button>
            </Col>

        </Row>
  </Container>
  )
}