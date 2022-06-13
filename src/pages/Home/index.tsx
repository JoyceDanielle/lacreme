import React, {useState} from 'react';
import { Button } from '../../components/Button';
import { List } from '../../components/List';
import { Modal } from '../../components/Modal';

//styles
import {Container, Logo, Main} from './style';

export type TypesModal = "Criar" | "Cadastrar" | "Editar" ;
export interface ISabor {
  id: number,
  sabor: string
}

export function Home () {

    const [sabor, setSabor] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [array, setArray] = useState<ISabor[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [type, setType] = useState<TypesModal>('Criar');

    const  GenerateId = (): number => {
      let id: number = count + 1;
      return id;
      
    }

    const CreateHandle = (array: ISabor[], sabor: string) =>{
      const id = GenerateId();
      setCount(count+1)
      setId(id)
      const novo = {id, sabor}
      setArray([...array, novo])
      setModal(false)
      setSabor('')
    }

    const ModalHandle = (modal: boolean) =>{
      setModal(modal)
      if(modal){
        setType('Cadastrar')
        setSabor('')
      }
    } 

    const ModalEdit = (sabor: string, id: number) =>{
      setModal(true);
      setType('Editar');
      setId(id)
      setSabor(sabor)
    }

    const DeleteHandle = (array: ISabor[], id: number) => {
      setArray(array.filter(item => {
        return item.id !== id
      }))
    }

    const EditHandle = (array: ISabor[], id: number,  sabor: string) => {
      console.log('sabor ', sabor)
      console.log('id', id)
        array.map(item =>{
          return item.id === id ? item.sabor = sabor : item.sabor
        })
        setModal(false)
    }

  return (
    <Container>
        <Modal title='Cadastrar Sabor' modal={modal} modalHandle={ModalHandle} createHandle={CreateHandle} editHandle={EditHandle} sabor={sabor} setSabor={setSabor} id={id} type={type} sabores={array}/>
        <Logo>
            Lacreme
        </Logo>
        <Main>
          <Button title='Criar' onClick={ModalHandle}/>
          <List sabores={array} deleteHandle={DeleteHandle} modalEdit={ModalEdit}/>
        </Main>   
    </Container>
  );
}
