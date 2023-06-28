import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'

const id = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const fornecedor = JSON.parse(window.localStorage.getItem('fornecedor'))
            const fornecedores = fornecedor[query.id]
            for (let campo in fornecedores) {
                setValue(campo, fornecedores[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const fornecedor = JSON.parse(window.localStorage.getItem('fornecedor')) || []
        fornecedor.splice(query.id, 1, dados)
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
    <br />
    <br />
    <br />
</Pagina>
  )
}

export default id