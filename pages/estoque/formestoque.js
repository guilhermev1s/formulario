import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import cadastroValidators from '@/validators/cadastroValidators'

const formestoque = () => {
    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const estoque = JSON.parse(window.localStorage.getItem('estoque')) || []
        estoque.unshift(dados)
        window.localStorage.setItem('estoque', JSON.stringify(estoque))
        push("/estoque")
    }

  return (
    <Pagina titulo="Estoque">
<Form>
                <Form.Group className="mb-3" controlId="materiaprima">
                    <Form.Label>Matéria prima: </Form.Label>
                    <Form.Control type="text" {...register('materiaprima', cadastroValidators.materiaprima)} />
                    {
                        errors.materiaprima &&
                        <p className='mt-1 text-danger'>{errors.materiaprima.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="codigodebarra">
                    <Form.Label>Código de barra: </Form.Label>
                    <Form.Control type="text" {...register('codigodebarra', cadastroValidators.codigodebarra)} />
                    {
                        errors.codigodebarra &&
                        <p className='mt-1 text-danger'>{errors.codigodebarra.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="peso">
                    <Form.Label>Peso: </Form.Label>
                    <Form.Control type="text" {...register('peso')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sabor">
                    <Form.Label>Sabor: </Form.Label>
                    <Form.Control type="text" {...register('sabor')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fornecedor">
                    <Form.Label>Fornecedor: </Form.Label>
                    <Form.Control type="text" {...register('fornecedor', cadastroValidators.fornecedor)} />
                    {
                        errors.fornecedor &&
                        <p className='mt-1 text-danger'>{errors.fornecedor.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label>Quantidade: </Form.Label>
                    <Form.Control type="number" {...register('quantidade', cadastroValidators.quantidade)} />
                    {
                        errors.quantidade &&
                        <p className='mt-1 text-danger'>{errors.quantidade.message}</p>
                    }
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
<br/>
<br/>
<br/>
    </Pagina>
  )
}

export default formestoque