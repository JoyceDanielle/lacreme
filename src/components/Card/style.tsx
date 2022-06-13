import styled from "styled-components";
import {Secundary} from '../../assets/Colors'

export const Container = styled.div`
    border-radius: 4px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FFF;
    margin: 24px;
`

export const Aside = styled.div`
    display: flex;
    gap: 32px;
`

export const Icone = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const Text = styled.p`
    color: ${Secundary};
    font-size: 18px;
    font-weight: bold;
`