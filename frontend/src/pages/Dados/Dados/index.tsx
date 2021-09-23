import React, { useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom'
import api from '../../../services/api'

import './index.css'

interface IDados{
    codigo_func: number;
    nome_func: string;
    email_func: string;
}


const Dados: React.FC = () => {

    const [ dados, setDados ] = useState<IDados[]>([]) 
    const history = useHistory()

    useEffect( ()=> {
        loadDados()
    }, []
    )


    async function loadDados(){

        const response = await api.get('/v1/elx/funcionarios')
        //console.log(response)
        setDados(response.data._embedded.funcionarioDTOList)
    }

    function novoDado(){
         history.push('/')
    }


    return (
        <div className="container" id = "tabledados">
            <br/>
            <div className="dados-header">
                <h1>Pagina do ADMIN</h1>
                <Button variant="dark" size="sm" onClick={novoDado}>Novo usuario</Button>
            </div>
            <br/>

                 <Table striped bordered hover variant="dark" text-align = "center">
                    <thead>
                        <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        
                        dados.map(dado => (
                        
                        <tr key={dado.codigo_func}>
                            <td> {dado.codigo_func} </td>
                            <td> {dado.nome_func} </td>
                            <td> {dado.email_func} </td>
                        </tr>

                        ) 
                        
                        )
                    }
                    
                    </tbody>
                    </Table>


        </div>
    );
}

export default Dados;