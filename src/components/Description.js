import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import DescriptionImg from '../assets/desc2.webp';

export default function Description() {
  return (
    <div>
        <Container>            
            <Row className=''>
                <Col lg={6}>
                    <div className='mx-auto py-5 px-4 text-center text-lg-left '>
                        <h1>Los Marounes Hair Salon</h1>
                        <p>Our team of highly trained and exceptionally skilled hairstylists is here to enhance your beauty for any special occasion. Discover why Hair Salon by Maroun holds the top ratings on Yelp and Google!</p>
                        <p>Hair Salon by Maroun is situated in the heart of Marountown, right in Los Marounes. Our specialties encompass a wide range of services, including but not limited to balayage, digital setting perms, refreshing perms, magical straight perms, root touch-ups, the latest trends in haircuts for both women and men, and luxurious hair treatments such as keratin and Mucota. Our salon is staffed by artistic stylists who have honed their craft to perfection, making Hair Salon by Maroun arguably one of California's finest hair salons.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='center-vertically'>
                        <Image src={DescriptionImg} fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
