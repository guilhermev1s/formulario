import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="success" variant="light">
        <Container>
          <Navbar.Brand >Pizzaria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="/">Clientes</Nav.Link>
            <Nav.Link className='nav-link' href="/">Formas de pagamentos</Nav.Link>
            <Nav.Link className='nav-link' href="/">Estoque</Nav.Link>
            <Nav.Link className='nav-link' href="/">Funcionários</Nav.Link>
            <Nav.Link className='nav-link' href="/">Fornecedor</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho