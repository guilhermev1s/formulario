import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

const formpag = () => {
    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        const pagamentos = JSON.parse(window.localStorage.getItem('pagamentos')) || []
        pagamentos.unshift(dados)
        window.localStorage.setItem('pagamentos', JSON.stringify(pagamentos))
        push("/pagamentos")
    }

    return (
        <Pagina titulo="Folhas de Pagamentos">
            <Form>
                <Form.Group className="mb-3" controlId="remuneração">
                    <Form.Label>Remuneração: </Form.Label>
                    <Form.Control type="number" {...register('remuneração')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descontos">
                    <Form.Label>Descontos: </Form.Label>
                    <Form.Control type="number" {...register('descontos')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="comissao">
                    <Form.Label>Comissão: </Form.Label>
                    <Form.Control type="number" {...register('comissao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="passagem">
                    <Form.Label>Passagem: </Form.Label>
                    <Form.Control type="text" {...register('passagem')} />
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

export default formpag