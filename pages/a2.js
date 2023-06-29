import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Accordion, Image, ListGroup } from 'react-bootstrap'

const index = () => {
  return (

    <Pagina titulo="Página Inicial">

    <Image class="img-fluid" src='https://www.alcides.com.br/wp-content/uploads/2017/04/salao-pizzaria.jpg' 
    width="500" height="400" rounded />

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Cadastros</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item> <Link href="/clientes/formclientes">
                Clientes
              </Link></ListGroup.Item>
              <ListGroup.Item> <Link href="/clientes/formestoque">
                Estoque
              </Link></ListGroup.Item>
              <ListGroup.Item> <Link href="/clientes/formforne">
                Fornecedor
              </Link></ListGroup.Item>
              <ListGroup.Item> <Link href="/clientes/formfunc">
                Funcionário
              </Link></ListGroup.Item>
              <ListGroup.Item> <Link href="/clientes/formpag">
                Pagamentos
              </Link></ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
<br/> 
<br/> 
<br/> 
    </Pagina>
  )
}

export default index