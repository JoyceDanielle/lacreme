import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
`
export const Logo = styled.span`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 16px;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px 150px;
    @media screen and (max-width: 700px){
        margin: 16px 75px
    }
    @media screen and (max-width: 500px){
        margin: 16px 45px
    }
`