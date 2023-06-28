import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [pagamentos, setpagamentos] = useState([])

    useEffect(() => {
        setpagamentos(getAll())
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('pagamentos')) || []
        }
        

function excluir(i){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('pagamentos', JSON.stringify(itens))
        setpagamentos(itens)
    }
}

    return (
        <Pagina titulo="Folhas de Pagamentos">

            <Link href="/pagamentos/formpag" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Remuneração</th>
                        <th>Descontos</th>
                        <th>Comissão</th>
                        <th>Passagem</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {pagamentos.map((pagamentos, index) => (
                        <tr key={index}>
                            <td>{pagamentos.remuneracao}</td>
                            <td>{pagamentos.descontos}</td>
                            <td>{pagamentos.comissao}</td>
                            <td>{pagamentos.passagem}</td>
                            <td>
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(index)} className='text-danger'/>
                                <Link href={'/pagamentos/' + index}>
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