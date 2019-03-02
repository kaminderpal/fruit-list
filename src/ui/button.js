import styled from 'styled-components';


export const Button = styled.button`
    width : ${props=> props.width};
    display: inline-block;
    font-weight: 400;
    color: ${props=>props.theme.secondaryColor};
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: ${props=> props.theme.primaryBackground};
    border: 1px solid ${props=>props.theme.primaryBackground};
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
    :not(:disabled){
        cursor : pointer;
    }
    :hover{
        background-color: ${props=> props.theme.hoverColor};
        border-color: ${props=> props.theme.hoverColor};
        box-shadow : 0 .5rem 1rem rgba(0,0,0,.15);
    }
    :focus{
        outline : 0;
    }
`;
