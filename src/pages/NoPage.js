import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import Button from 'react-bootstrap/Button';

export default function NoPage() {
  return (
    <div>
    <header className="App-header">
        <AppNavbar />
    </header>

<Container>
<   Row>
        <Col>
            <div className='mx-auto my-5 text-center'>
                <h1 className='dancing-script'>404</h1>
                <br></br>
                <div className="w-75 mx-auto">
                    <p>Oops! Looks like this page doesn't exists</p>
                </div>
            </div>
        </Col>
    </Row>
</Container>

    <footer>
      <AppFooter />
    </footer>
</div>
  )
}
