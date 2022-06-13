import React from 'react';

import styled from 'styled-components';
import { Black } from '../../assets/Colors';

interface IModalStyle{
    readonly type: boolean
}

export const Area = styled.div<IModalStyle>`
    display: ${props => props.type === false ? "none" : "block"};
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${Black};
    opacity: .5;
`

export const Container = styled.div`
    position: absolute;
    border-radius: 4px;
    width: 400px;
    height: 400px;
    background-color: #FFF;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 16px;
`
