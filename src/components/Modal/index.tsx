import React, { useEffect } from 'react';
import { ISabor, TypesModal } from '../../pages/Home';
import { Button } from '../Button';
import { Input } from '../Input';
import { Area, Background, Container, Title } from './style';

export interface IModalProps {
    title: string,
    type: TypesModal,
    sabor: string,
    setSabor: React.Dispatch<React.SetStateAction<string>>,
    id: number,
    sabores: ISabor[],
    modal: boolean,
    modalHandle(modal: boolean): void,
    createHandle(array: ISabor[], sabor: string): void,
    editHandle(array: ISabor[], id: number, sabor: string): void
}

export function Modal (props: IModalProps) {

  useEffect(()=>{
    console.log(props.id)
  }, [props.id])

  return (
    <Area type={props.modal}>
      <Background onClick={()=> props.modalHandle(false)}/>
      <Container>
        <Title>
            {props.title}
        </Title>
        <Input sabor={props.sabor} setSabor={props.setSabor}/>
        <Button title={props.type} onClick={props.type === 'Cadastrar' ? ()=> props.createHandle(props.sabores, props.sabor) : ()=> props.editHandle(props.sabores, props.id, props.sabor)}/>
      </Container>
    </Area>
  );
}
