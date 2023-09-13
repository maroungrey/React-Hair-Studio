import React from "react";
import { Container, Navbar, Nav, NavLink, Row } from 'react-bootstrap'
import Logo1 from "../assets/Logo-01.svg"


const menuData = [
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
  },
  {
    path: '/contact',
    name: 'Contact'
},
]

export default function AppNavbar() {
  return (
      <header id='header-wrapper' style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
        <div className="d-flex justify-content-center">
          <Navbar.Brand href='/' className="mx-auto">
            {/* LOGO */}
            <img
              src={Logo1}
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="Hair Studio Logo"
            />
          </Navbar.Brand>
        </div>

        <div className="text-center" id="basic-navbar-nav">
          {
            menuData.map((item) => (
              <NavLink className="d-inline-block" href={item.path} key={item.name}>
                <div className="list_item fh-link px-2 py-1">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
      </header>
    );
}



