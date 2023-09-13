import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function List() {
  return (
    
        <Col xs={12} lg={6} className="py-5">
            <Container>
              <Row>
                <h3>Haircuts</h3>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Men’s Cut</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$60</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Women’s Cut</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$90</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Boys’ Cut*</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$50</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Girls’ Cut*</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$60</Col>
              </Row>
<br></br>
              <Row>
                <h3>Perms</h3>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Regular Perm</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$200-$250</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Root Perm</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$150</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Side Down Perm</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$30-$40</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Bang Perm</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$30</Col>
              </Row>
<br></br>
              <Row>
                <h3>Hair Coloring</h3>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Single Color</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$150 & Up</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Toner</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$120 & Up</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Root Retouch</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$150</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Balayage</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$400 & Up</Col>
              </Row>
<br></br>
              <Row>
                <h3>Hair Treatments</h3>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Mucota Deep Treatment</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$100 – $200</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Keratin Treatment</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$250 – $400</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Scalp Treatment</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$200</Col>
              </Row>
              <Row>
                <Col xs="auto" sm="auto" md="auto" lg="auto">Scalp+Mucota Treatment</Col>
                <Col className="line"></Col>
                <Col xs="4" sm="4" md="4" lg="4">$300 – $350</Col>
              </Row>
            </Container>
          </Col>
    
  )
}
