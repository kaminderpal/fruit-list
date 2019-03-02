import styled from 'styled-components'

export const Container = styled.div`
    padding-right : 15px;
    padding-left  : 15px;
    margin : 0 auto;
    @media screen and (min-width: ${ props => props.theme.extraSmallScreen } ){
        max-width: 540px;
    }
    @media screen and (min-width: ${ props => props.theme.smallScreen } ){
        max-width: 720px;
    }
    @media screen and (min-width: ${ props => props.theme.mediumScreen } ){
        max-width: 960px;
    }
    @media screen and (min-width: ${ props => props.theme.largeScreen }){
        max-width: 1140px;
    }
`;
