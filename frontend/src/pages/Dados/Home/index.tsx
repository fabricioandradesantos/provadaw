import React, { useState, useEffect, ChangeEvent} from 'react';
import {  Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api'

import './index.css'

interface IDados{
    nome: string;
    email: string;
}


const Home: React.FC = () => {
    
    const history = useHistory()
    const [model, setModel] = useState<IDados> ({
        nome: '',
        email: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

       const response = await api.post('/v1/elx/funcionarios', model)

       // console.log(response)

    }

    function irAdmin(){
        history.push('/dados')
    }


    return (
        <div className="container">
            <br/>
            <div className="dados-header">
                <h1>Pagina do Usuario</h1>
                <Button variant="dark" size="sm" onClick={irAdmin}>Admin</Button>
            </div>
            <br/>

            <div className="container" >
            <Form onSubmit={onSubmit} id="formusuario">
            <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Insira um nome" 
                name="nome" onChange = {(e: ChangeEvent<HTMLInputElement>)=>
                    updateModel(e)
                }
                />           
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Insira um email" 
                name="email" onChange = {(e: ChangeEvent<HTMLInputElement>)=>
                    updateModel(e)
                }
                />
            </Form.Group>
             
            <Button variant="dark" type="submit">
                Incluir
            </Button>  
            
            </Form>

            </div>


        </div>
    );
}

export default Home;