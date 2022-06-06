import * as React from 'react';
import { TypesModal } from '../../pages/Home';
import { Button } from '../Button';
import { Input } from '../Input';
import { Area, Background, Container, Title } from './style';

export interface IModalProps {
    title: string,
    type: TypesModal,
    sabor: string,
    setSabor: React.Dispatch<React.SetStateAction<string>>
    modal: boolean
}

export function Modal (props: IModalProps) {
  return (
    <Area type={props.modal}>
      <Background/>
      <Container>
        <Title>
            {props.title}
        </Title>
        <Input sabor={props.sabor} setSabor={props.setSabor}/>
        <Button title={props.type}/>
      </Container>
    </Area>
  );
}
