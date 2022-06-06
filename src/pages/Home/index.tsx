import React, {useState} from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';

//styles
import {Container, Logo} from './style';

export type TypesModal = "Criar" | "Cadastrar" | "Editar" ;

export function Home () {

    const [sabor, setSabor] = useState<string>("");
    const [array, setArray] = useState<string[]>([])
    const [modal, setModal] = useState<

    const CreateHandle = () =>{
      setArray([...array, sabor])
    }

  return (
    <Container>
        <Modal title='Cadastrar Sabor' sabor={sabor} setSabor={setSabor} type="Cadastrar"/>
        <Logo>
            Lacreme
        </Logo>
        <Button title='Criar'/>
    </Container>
  );
}
