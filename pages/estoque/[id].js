import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const id = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const estoque = JSON.parse(window.localStorage.getItem('estoque'))
            const estoques = estoque[query.id]
            for (let campo in estoques) {
                setValue(campo, estoques[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const estoque = JSON.parse(window.localStorage.getItem('estoque')) || []
        estoque.splice(query.id, 1, dados)
        window.localStorage.setItem('estoque', JSON.stringify(estoque))
        push("/estoque")
    }

  return (
    <Pagina titulo="Estoque">
<Form>
                <Form.Group className="mb-3" controlId="materia prima">
                    <Form.Label>Matéria prima: </Form.Label>
                    <Form.Control type="text" {...register('materia prima')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="codigo de barra">
                    <Form.Label>Código de barra: </Form.Label>
                    <Form.Control type="number" {...register('codigo de barra')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="peso">
                    <Form.Label>Peso: </Form.Label>
                    <Form.Control type="number" {...register('peso')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sabor">
                    <Form.Label>Sabor: </Form.Label>
                    <Form.Control type="text" {...register('sabor')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fornecedor">
                    <Form.Label>Fornecedor: </Form.Label>
                    <Form.Control type="text" {...register('fornecedor')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label>Quantidade: </Form.Label>
                    <Form.Control type="text" {...register('quantidade')} />
                </Form.Group>



                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/estoque">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
    </Pagina>
  )
}

export default id