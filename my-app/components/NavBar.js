import{ useState } from "react";
import { Navbar, Container } from "react-bootstrap";
//steps are
//she copied navbar from site and pasted it
//
export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> //put image here on the nav bar brand
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> //icon on the navbar toggle
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>//skills
                <Nav.Link href="#link">Link</Nav.Link>//project
                //deleted nav drop down
              </Nav>//social icon with navbar text and other stuff
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    //stopped at 7:58