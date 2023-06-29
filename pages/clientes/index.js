import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [clientes, setclientes] = useState([])

    useEffect(() => {
        setclientes(getAll())
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('clientes')) || []
        }
        

function excluir(i){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('clientes', JSON.stringify(itens))
        setclientes(itens)
    }
}

    return (
        <Pagina titulo="Clientes">

            <Link href="/clientes/formclientes" className='mb-2 btn btn-primary'>
                Novo
            </Link>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((clientes, index) => (
                        <tr key={index}>
                            <td>{clientes.nome}</td>
                            <td>{clientes.cpf}</td>
                            <td>{clientes.email}</td>
                            <td>{clientes.telefone}</td>
                            <td>{clientes.cep}</td>
                            <td>{clientes.logradouro}</td>
                            <td>{clientes.complemento}</td>
                            <td>{clientes.numero}</td>
                            <td>{clientes.bairro}</td>
                            <td>
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(index)} className='text-danger'/>
                                <Link href={'/clientes/' + index}>
                                <BsPencilFill/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index