import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [estoque, setestoque] = useState([])

    useEffect(() => {
        setestoque(getAll())
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('estoque')) || []
        }
        

function excluir(i){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('estoque', JSON.stringify(itens))
        setestoque(itens)
    }
}

    return (
        <Pagina titulo="Estoque">

            <Link href="/estoque/formestoque" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Matéria prima</th>
                        <th>Código de barra</th>
                        <th>Peso</th>
                        <th>Sabor</th>
                        <th>Fornecedor</th>
                        <th>Quantidade</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {estoque.map((estoque, index) => (
                        <tr key={index}>
                            <td>{estoque.materiaprima}</td>
                            <td>{estoque.codigodebarra}</td>
                            <td>{estoque.peso}</td>
                            <td>{estoque.sabor}</td>
                            <td>{estoque.fornecedor}</td>
                            <td>{estoque.quantidade}</td>
                            <td>
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(index)} className='text-danger'/>
                                <Link href={'/estoque/' + index}>
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