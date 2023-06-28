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
            const funcionario = JSON.parse(window.localStorage.getItem('funcionario'))
            const Funcionarios = funcionario[query.id]
            for (let campo in Funcionarios) {
                setValue(campo, Funcionarios[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const funcionario = JSON.parse(window.localStorage.getItem('funcionario')) || []
        funcionario.splice(query.id, 1, dados)
        window.localStorage.setItem('funcionario', JSON.stringify(funcionario))
        push("/funcionario")
    }

  return (
    <Pagina titulo="Funcionários">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="funcao">
                    <Form.Label>Função: </Form.Label>
                    <Form.Control type="text" {...register('funcao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control type="number" {...register('cpf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="tel" {...register('telefone')} />
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
                    <Link className="ms-2 btn btn-danger" href="/funcionario">
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