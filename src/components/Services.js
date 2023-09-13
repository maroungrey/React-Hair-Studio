import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'


const servicesData = [
    {
        id: 1,
        icon: "icon-01",
        title: 'Haircuts',
        description: "Are you in search of a fresh appearance? Interested in a low-maintenance hairstyle or perhaps considering a change like layered haircuts? At Sono Felice by Christine, our skilled stylists are prepared to assist you. We are dedicated to discovering the perfect look for you and providing guidance on how to maintain and style your hair moving forward."
    },
    {
        id: 2,
        icon: "icon-02",
        title: 'Color',
        description: "Are you prepared for a remarkable change in your hair color? Or do you require assistance in correcting self-applied color? Whether it's highlights, balayage, ombre, peekaboo hair, root touch-ups, color corrections, full coloring, or imaginative special shades, we've got you covered! Our team of color specialists is eager to assist you."
    },
    {
        id: 3,
        icon: "icon-03",
        title: 'Perms',
        description: "Book an appointment with one of our skilled stylists to achieve a fabulous perm! Opting for a perm is a fantastic choice when you're seeking a fresh and effortlessly manageable hairstyle. Our range of options includes c-curl perm, hippie perm, s-curl perm, standard perm, digital perm, magic straight perm, men's perm, and side-down perm."
    },
    {
        id: 4,
        icon: "icon-04",
        title: 'Hair Treatments',
        description: "At Hair Studio by MarounGrey, you can attain lustrous, well-nourished hair through our Keratin Treatments. Our Scalp Treatment offers a thorough purification, revitalizes the scalp, aids in reducing hair loss, and promotes scalp equilibrium. Connect with our hairstylist for a personalized consultation to determine the ideal hair treatment for your needs."
    },
    {
        id: 5,
        icon: "icon-05",
        title: 'Styling',
        description: "Whether you're seeking a hairstyling service for a date, job interview, or a special event, our highly skilled stylists are here to fulfill your desired look. Our hairstyling service, available for both men and women, also includes a rejuvenating shampoo session. Don't hesitate, secure your appointment today!"
    },
    {
        id: 6,
        icon: "icon-06",
        title: 'Wedding Hair & Makeup',
        description: "Hair Studio by MarounGrey comprehends the essence of enhancing your radiance for your wedding day. Contact us to arrange a free consultation, ensuring you feel your most beautiful and radiate that bridal glow on your special day!"
    }
  ]

export default function Services() {
  return (
    <section id='services' className='block services-block'>
            <Container fluid>
                <Row className='py-5'>
                    {
                        servicesData.map(services => {
                            return (
                                <Col sm={12} md={6} lg={4} className='text-center px-4' key={services.id}>
                                    <div className='icon py-3'>
                                        <Image src={require('../assets/' + services.icon + '.svg')} fluid width="40" />   
                                    </div>
                                    <h1>{services.title}</h1>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
  )
}
