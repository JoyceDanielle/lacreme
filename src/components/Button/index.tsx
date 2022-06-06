import * as React from 'react';

import { Area } from './style';

import { TypesModal } from '../../pages/Home';

export interface IButtonProps {
    title: TypesModal
}

export function Button (props: IButtonProps) {
  return (
    <Area>
      {props.title}
    </Area>
  );
}
