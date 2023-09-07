import React from "react";
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import Logo1 from "../assets/Logo-01.svg"


const menuData = [
  {
      path: '/',
      name: 'Home'
  },
  {
      path:'/about',
      name: 'About'
  },
  {
      path:'/services',
      name: 'Services'
  },
  {
      path:'/book',
      name: 'Book'
  }
]

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/' className="me-auto">
            {/* LOGO */}
            <img
              src={Logo1}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="Hair Studio Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink href={item.path} key={item.name}>
                        <div className="list_item">{item.name}</div>
                    </NavLink>
                ))
            }        
          </Nav>
          <Nav>
            <Nav.Link className="m-1"><i class="fa-brands fa-facebook-f"></i></Nav.Link>
            <Nav.Link className="m-1"><i class="fa-brands fa-instagram"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}



