import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Hero from "../assets/banner-1.jpg"
import DescriptionImg from '../assets/desc2.jpg'
import WorkHoursImg from '../assets/work-hours.png'



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

export default function HomePage() {
  return (
    <div>
        <header>
            <AppNavbar />
        </header>

        
        <section className='hero-block'> 
            {/* <div className='p-5 text-center bg-image hero-image'>
            </div>         */}
            <img
                className="d-block w-100"
                src={Hero}
                alt='Hero Image'
            />
        </section>

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
                                <Image src={require('../assets/' + item.image + '.jpg')} fluid/>        
                        </Col>
                        ))
                    }
                </Row>
            </div>



            {/* Description */}
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

        {/* Working hours */}
        <section className='my-5 py-5 theme-color'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className='px-3 center-vertically'>
                        <Image src={WorkHoursImg} fluid/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='px-3 mt-3 px-4 text-center text-lg-left '>
                        <h1>Working Hours</h1>
                        <p>Open 7 days a week. Walk-Ins are welcomed.</p>
                        <p>Tuesday – Saturday …………….. 10AM – 7PM</p>
                        <p>Sunday – Monday …………………. 10AM – 6PM</p>
                        <a href="/book">
                            <Button variant="dark">Book Appointment</Button>
                        </a>
                    </div> 
                </Col>
            </Row>
        </Container>
            </section>
            <footer>
                <AppFooter />
            </footer>
    </div>
  )
}
