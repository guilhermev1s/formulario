import React from 'react'
import { Button, Col, Container, Form, Image, Nav, NavDropdown, Navbar, Offcanvas, Row } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="success" variant="light" className="variant-dark-bg-body-tertiary mb-3" >
          <Container bg="success" variant="light" fluid>
            <Navbar.Brand >Pizzaria</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <Image src="https://novonegocio.com.br/wp-content/uploads/2019/09/pizzaria.jpg" width="300" height="200" rounded />
                    </Col>
                  </Row>
                </Container>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='nav-link' href="/clientes">Clientes</Nav.Link>
                  <Nav.Link className='nav-link' href="/pagamentos">Folhas de pagamentos</Nav.Link>
                  <Nav.Link className='nav-link' href="/estoque">Estoque</Nav.Link>
                  <Nav.Link className='nav-link' href="/funcionario">Funcionários</Nav.Link>
                  <Nav.Link className='nav-link' href="/fornecedor">Fornecedor</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  )
}

export default Cabecalho