import * as React from 'react';
import { ISabor } from '../../pages/Home';
import { Card } from '../Card';
import { Container } from './style';

export interface IListProps {
    sabores: ISabor[],
    deleteHandle(array: ISabor[], id: number): void,
    modalEdit(sabor: string, id: number): void
}

export function List (props: IListProps) {
  return (
    <Container>
        {props.sabores ?
            props.sabores.map(item =>{
               return <Card sabor={item.sabor} id={item.id} sabores={props.sabores} deleteHandle={props.deleteHandle} modalEdit={props.modalEdit}/> 
            }) 
            : 
            <p>Não possui sabores</p>
        }
    </Container>
  );
}
