import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import cadastroValidators from '@/validators/cadastroValidators'

const formclientes = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    function salvar(dados) {
        const clientes = JSON.parse(window.localStorage.getItem('clientes')) || []
        clientes.unshift(dados)
        window.localStorage.setItem('clientes', JSON.stringify(clientes))
        push("/clientes")

    }

    function handleChange(event) {
    const name = event.target.name
    const valor = event.target.setValue
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(valor, mascara));
    }

  return (
    <Pagina titulo="Clientes">
<Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cadastroValidators.nome)} />
               {
              errors.nome &&
              <p className='mt-1 text-danger'>{errors.nome.message}</p>
              }
        </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="text" 
                    mask='999.999.999-99'
                    {...register('cpf', cadastroValidators.cpf)} onChange={handleChange} />
          {
              errors.cpf &&
              <p className='mt-1 text-danger'>{errors.cpf.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register('email', cadastroValidators.email)} />
          {
              errors.email &&
              <p className='mt-1 text-danger'>{errors.email.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" {...register('telefone', cadastroValidators.telefone)} />
          {
              errors.telefone &&
              <p className='mt-1 text-danger'>{errors.telefone.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="number" {...register('cep', cadastroValidators.cep)} />
          {
              errors.cep &&
              <p className='mt-1 text-danger'>{errors.cep.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control type="text" {...register('logradouro', cadastroValidators.logradouro)} />
          {
              errors.logradouro &&
              <p className='mt-1 text-danger'>{errors.logradouro.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" {...register('complemento', cadastroValidators.complemento)} />
          {
              errors.complemento &&
              <p className='mt-1 text-danger'>{errors.complemento.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="text" {...register('numero', cadastroValidators.numero)} />
          {
              errors.numero &&
              <p className='mt-1 text-danger'>{errors.numero.message}</p>
          }
        </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" {...register('bairro', cadastroValidators.bairro)} />
          {
              errors.bairro &&
              <p className='mt-1 text-danger'>{errors.bairro.message}</p>
          }
        </Form.Group>


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/clientes">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
<br/>
<br/>
    </Pagina>
  )
}

export default formclientes