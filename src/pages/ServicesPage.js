import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import DescriptionImg from '../assets/desc1.webp'

import List from '../components/List';
import Services from '../components/Services';




export default function ServicesPage() {
  return (
    <div>

      <AppNavbar />
        <h1 className='dancing-script py-5 text-center'>Services</h1>
      <Container>

        <Row>
          <Col xs={12} lg={6}>
            <div className='center-vertically'>
                <Image src={DescriptionImg} fluid/>
            </div>
          </Col>
          <List />
          

        </Row>

        <Row>
          <Services/>    
        </Row>

      </Container>

      <AppFooter />
        
</div>
  )
}
