import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Banner from "../assets/banner-3.jpg"

export default function About() {
  return (
    <div>
        <header className="App-header">
            <AppNavbar />
        </header>

        <section className='hero-block'> 
            {/* <div className='p-5 text-center bg-image hero-image'>
            </div>         */}
            <img
                className="d-block w-100"
                src={Banner}
                alt='Hero Image'
            />
        </section>

        <Container>
            {/* Quote */}
            <div className='my-1'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <h1 className='dancing-script'>About Us</h1>
                            <br></br>
                            <div className="w-75 mx-auto">
                                <p>Hair Studio by MarounGrey is a top-tier hair salon nestled in the vibrant Los Marounes district at the very heart of Marountown. Our expertise spans a wide range of services, including but not limited to balayage, digital setting perms, refreshing perms, magical straight perms, root touch-ups, the latest trends in haircuts for both women and men, and luxurious hair treatments like keratin and Mucota. Our team consists of skilled and artistic stylists who have honed their craft to perfection.</p>

                                <p>Regarded by many as one of California's premier hair salons, Hair Studio has cultivated strong and enduring bonds with our cherished clients over the years, including numerous celebrities and influential figures in the realm of social media. We prioritize the safety and well-being of our clients and staff, diligently adhering to stringent COVID-19 Protection and Health Guidelines.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
