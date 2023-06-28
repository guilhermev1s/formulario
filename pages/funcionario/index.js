import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [funcionario, setfuncionario] = useState([])

    useEffect(() => {
        setfuncionario(getAll())
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('funcionario')) || []
        }
        

function excluir(i){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('funcionario', JSON.stringify(itens))
        setfuncionario(itens)
    }
}

    return (
        <Pagina titulo="Funcionários">

            <Link href="/funcionario/formfunc" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Função</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {funcionario.map((funcionario, index) => (
                        <tr key={index}>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.funcao}</td>
                            <td>{funcionario.cpf}</td>
                            <td>{funcionario.telefone}</td>
                            <td>{funcionario.endereco}</td>
                            <td>
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(index)} className='text-danger'/>
                                <Link href={'/funcionario/' + index}>
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