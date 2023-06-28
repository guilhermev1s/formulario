import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

const formforne = () => {
    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        const fornecedor = JSON.parse(window.localStorage.getItem('fornecedor')) || []
        fornecedor.unshift(dados)
        window.localStorage.setItem('fornecedor', JSON.stringify(fornecedor))
        push("/fornecedor")
    }

  return (
    <Pagina titulo="Fornecedor">
<Form>
                <Form.Group className="mb-3" controlId="razaosocial">
                    <Form.Label>Razão Social: </Form.Label>
                    <Form.Control type="text" {...register('razaosocial')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cnpj">
                    <Form.Label>CNPJ: </Form.Label>
                    <Form.Control type="number" {...register('cnpj')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="prazo">
                    <Form.Label>Prazo: </Form.Label>
                    <Form.Control type="date" {...register('prazo')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereço: </Form.Label>
                    <Form.Control type="text" {...register('endereco')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/fornecedor">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
<br/>
<br/>
<br/>
    </Pagina>
  )
}

export default formforne