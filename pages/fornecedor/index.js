import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [fornecedor, setfornecedor] = useState([])

    useEffect(() => {
        setfornecedor(getAll())
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('fornecedor')) || []
        }
        

function excluir(i){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('fornecedor', JSON.stringify(itens))
        setfornecedor(itens)
    }
}

    return (
        <Pagina titulo="Fornecedor">

            <Link href="/fornecedor/formforne" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>Produto</th>
                        <th>Prazo</th>
                        <th>Endereço</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {fornecedor.map((fornecedor, index) => (
                        <tr key={index}>
                            <td>{fornecedor.razaosocial}</td>
                            <td>{fornecedor.cnpj}</td>
                            <td>{fornecedor.produto}</td>
                            <td>{fornecedor.prazo}</td>
                            <td>{fornecedor.endereco}</td>
                            <td>
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(index)} className='text-danger'/>
                                <Link href={'/fornecedor/' + index}>
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