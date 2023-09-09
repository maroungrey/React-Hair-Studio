import React from 'react'
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import DescriptionImg from '../assets/desc1.jpg'
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookPage() {

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#E6D9CC"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  return (
    
    <div>
        <header className="App-header">
          <AppNavbar />
        </header>
        <Container>
        <Row className=''>
        <h1 className='dancing-script my-5 text-center'>Make an Appointment</h1>
        <Cal
          calLink="maroungrey/hair-salon-appointment"
          style={{width:"100%",height:"100%",overflow:"scroll"}}
          config={{layout: 'month_view'}}
        />;
        </Row>
        </Container>
        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
