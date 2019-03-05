import styled from 'styled-components';

export const Card = styled.div`
        flex: 1 0 200px;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid ${props=>props.theme.primaryBackground};
        border-radius: .25rem;
        margin : 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        @media screen and (min-width: ${ props => props.theme.extraSmallScreen } ){
            max-width : calc(100% - 1rem);
        }
        @media screen and (min-width: ${ props => props.theme.smallScreen } ){
            max-width : calc(50% - 1rem);
        }
        @media screen and (min-width: ${ props => props.theme.mediumScreen } ){
            max-width : calc(50% - 1rem);
        }
        @media screen and (min-width: ${ props => props.theme.largeScreen }){
            max-width: calc(21% - 1rem);
        }
`;