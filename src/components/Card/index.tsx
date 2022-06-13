import * as React from 'react';
import { Container, Text, Aside, Icone } from './style';
import {Trash, Pencil} from 'phosphor-react';
import { Secundary } from '../../assets/Colors';
import { ISabor } from '../../pages/Home';

export interface ICardProps {
    sabor: string,
    sabores: ISabor [],
    id: number,
    deleteHandle(array: ISabor[], id: number): void,
    modalEdit(sabor: string, id: number): void
}

export function Card (props: ICardProps) {

  const Capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Container>
        <Text>
            {Capitalize(props.sabor)}
        </Text>
        <Aside>
          <Icone onClick={() => props.deleteHandle(props.sabores, props.id)}>
            <Trash color={Secundary} size={24} weight="bold"/>
          </Icone>
          
          <Icone onClick={()=>props.modalEdit(props.sabor, props.id)}>
            <Pencil color={Secundary} size={24} weight="bold"/>
          </Icone>
          
        </Aside>
        
    </Container>
  );
}
