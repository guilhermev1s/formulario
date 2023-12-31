import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { mask } from 'remask'
import cadastroValidators from '@/validators/cadastroValidators'

const formforne = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function salvar(dados) {
        const fornecedor = JSON.parse(window.localStorage.getItem('fornecedor')) || []
        fornecedor.unshift(dados)
        window.localStorage.setItem('fornecedor', JSON.stringify(fornecedor))
        push("/fornecedor")
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
    
        setValue(name, mask(valor, mascara));
        }

    return (
        <Pagina titulo="Fornecedor">
            <Form>
                <Form.Group className="mb-3" controlId="razaosocial">
                    <Form.Label>Razão Social: </Form.Label>
                    <Form.Control type="text" {...register('razaosocial', cadastroValidators.razaosocial)} />
                    {
                        errors.razaosocial &&
                        <p className='mt-1 text-danger'>{errors.razaosocial.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cnpj">
                    <Form.Label>CNPJ: </Form.Label>
                    <Form.Control mask='99.999.999/9999-99' type="text" 
                    {...register('cnpj', cadastroValidators.cnpj)} onChange={handleChange} />
                    {
                        errors.cnpj &&
                        <p className='mt-1 text-danger'>{errors.cnpj.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="prazo">
                    <Form.Label>Prazo: </Form.Label>
                    <Form.Control type="date" {...register('prazo', cadastroValidators.prazo)} />
                    {
                        errors.prazo &&
                        <p className='mt-1 text-danger'>{errors.prazo.message}</p>
                    }
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

export default formforne