import { useState } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';

const MyNavbar = ({form, setForm}) => {

  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">

        <Container>

          <Navbar.Brand href="#home">
            React-Bootstrap
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>

          </Navbar.Collapse>

          <Form>

            <Form.Control
              type="text"
              placeholder="Cosa stai cercando?"
              value={form}
              onChange={(e)=> setForm(e.target.value)}
            />

          </Form>

        </Container>

      </Navbar>
    </>
  );
}

export default MyNavbar