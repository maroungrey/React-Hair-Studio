import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import DescriptionImg from '../assets/desc1.jpg'

export default function BookPage() {
  return (
    
    <div>
        <header className="App-header">
          <AppNavbar />
        </header>
        <Container>
        <Row className=''>
        <h1 className='dancing-script my-5 text-center'>Make an Appointment</h1>
                
        </Row>
        </Container>
        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
