import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterImg from "../assets/footer-img.png"
import Image from 'react-bootstrap/Image';

export default function AppFooter() {
  return (
    <div>
        <Container className="d-flex flex-column align-items-center">
            <div>
            <Image
              src={FooterImg}
              className="mx-auto"
              alt="Hair Studio Footer Image"
              fluid
            />
            </div>
            <Row className="py-2 footer-links">
              <Col><a href='/about'>About</a></Col>
              <Col><a href='/about'>Services</a></Col>
              <Col><a href='/about'>Book</a></Col>
              <Col><a href='/about'>Contact</a></Col>
            </Row>
            <Row className="py-2">
              <Col className="m-1"><a href='#'><i class="fa-brands fa-facebook-f"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-instagram"></i></a></Col>
            </Row>
            <Row>© {new Date().getFullYear()} HairStudio. All rights reserved.</Row>
        </Container>
    </div>
  )
}
