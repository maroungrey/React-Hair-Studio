import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

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

export default function Quote() {
  return (
    <div>
        <Container>
            {/* Quote */}
            <div className='mt-5'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <h1 className='dancing-script'>Your hair, our canvas</h1>
                            <br></br>
                            <div className="w-75 mx-auto">
                                <p>At Hair Studio, we provide an extensive selection of personalized hair services.</p>
                                <p>Our dedicated team, boasting decades of collective expertise, was carefully handpicked by Maroun Grey, our Director Stylist.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        
                {/* Gallery */}
                <Row className='py-5'>
                    {
                        galleryData.map((item)=>(
                        <Col xs={12} lg={4}>
                                <Image src={require('../assets/' + item.image + '.webp')} fluid/>        
                        </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
    </div>
  )
}
