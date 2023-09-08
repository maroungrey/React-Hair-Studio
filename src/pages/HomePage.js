import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Hero from "../assets/Hero.jpg"
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
        <AppNavbar />
        <section className='hero-block'>         
            <img
                className="d-block w-100"
                src={Hero}
                alt='Hero Image'
            />
        </section>
        <Container>
            {/* Quote */}
            <div className='my-5'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <h1 className='dancing-script'>Your hair, our canvas</h1>
                            <br></br>
                            <div className="w-75 mx-auto">
                                <p>Hair Studio offers a full range of custom hair services.</p>
                                <p>Our professionally trained staff have decades of combined experience and the team of stylists and supporting staff were meticulously selected by the Director stylist Maroun Grey</p>
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
            <Row className='my-5'>
 
                <Col lg={6}>
                    <div className='mx-auto mt-3 px-4 text-center text-lg-left '>
                        <h1>Los Marounes Hair Salon</h1>
                        <p>Professional highly trained and skilled hair stylists to glam you up for every special occasion.
                            Find out why Hair Salon by Maroun is the highest-rated hair salon on Yelp and Google!
                            Hair Salon by Maroun is a hair salon located in Los Marounes in the heart of Marountown. Specialties include but are not limited to: balayage, digital setting perms, refresh perms, magic straight perms, root touch up, the latest styles of haircuts for women and men, and hair treatments such as keratin and Mucota. Staffed by artistic stylists who have mastered their craft, Hair Salon by Maroun is arguably one of the best hair salons in all of California. We have built strong relationships with our clients throughout the years; many of whom are Korean and American celebrities and social media influencers! We follow strict COVID-19 Protection & Health Guidelines in order to protect both clients and staff.</p>
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
        <div className='my-5 py-5 theme-color'>
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
                        <Button variant="dark">Book Appointment</Button>
                    </div> 
                </Col>

                </Row>
        </Container>
            </div>
        <AppFooter />
    </div>
  )
}
