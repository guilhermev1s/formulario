import React from 'react'
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
            const Pagamentos = JSON.parse(window.localStorage.getItem('Pagamentos'))
            const pagamento = Pagamentos[query.id]
            for (let campo in pagamento) {
                setValue(campo, pagamento[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const pagamentos = JSON.parse(window.localStorage.getItem('pagamentos')) || []
        pagamentos.splice(query.id, 1, dados)
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

export default id