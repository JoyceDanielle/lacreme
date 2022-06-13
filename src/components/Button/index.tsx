import * as React from 'react';

import { Area } from './style';

import { TypesModal } from '../../pages/Home';

export interface IButtonProps {
    title: TypesModal,
    onClick(modal: boolean): void
}

export function Button (props: IButtonProps) {
  return (
    <Area onClick={()=> props.onClick(true)}>
      {props.title}
    </Area>
  );
}
