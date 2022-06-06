import React, {ChangeEvent, useState} from 'react';

import {Area} from './style'

export interface IInputProps {
    sabor: string, 
    setSabor: React.Dispatch<React.SetStateAction<string>>
}

export function Input (props: IInputProps) {

    const ChangeHandle = (e: ChangeEvent<HTMLInputElement>) =>{
        props.setSabor(e.target.value)
    }

  return (
    <Area value={props.sabor} onChange={ChangeHandle} placeholder="Digite o seu sabor"/>
  );
}
