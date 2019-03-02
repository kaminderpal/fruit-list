import styled from 'styled-components'


export const Title = styled.h1`
    margin: 0;
    margin-top: 20px;
    padding: 1px 40px; 
    background : ${props=>props.theme.primaryBackground};
    color : ${props=>props.theme.secondaryColor};
`