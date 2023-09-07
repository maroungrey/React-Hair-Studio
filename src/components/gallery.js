import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const galleryData = [
        {
            image: 'gal-1',
            alt: 'Gallery image 1'
        },
        {
            image: 'gal-2',
            alt: 'Gallery image 2'
        },
        {
            image: 'gal-3',
            alt: 'Gallery image 3'
        },
    ]

export default function AppGallery() {
  return (
    <Container fluid>
    <Row>
        {
            galleryData.map((item)=>(
            <Col xs={12} lg={4}>
                    <Image src={require('../assets/' + item.image + '.jpg')} fluid/>        
            </Col>
            ))
        }
    </Row>
  </Container>
  )
}
