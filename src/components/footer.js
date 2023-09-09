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
              <Col><a href='/about'><div className="fh-link">About</div></a></Col>
              <Col><a href='/services'><div className="fh-link">Services</div></a></Col>
              <Col><a href='/book'><div className="fh-link">Book</div></a></Col>
              <Col><a href='/contact'><div className="fh-link">Contact</div></a></Col>
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
