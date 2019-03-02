import styled from 'styled-components'


export const Container = styled.div`
    padding-right : 15px;
    padding-left  : 15px;
    display : flex;
    margin : 0 auto;
    display : ${props=> props.flex};
    align-items : ${props=>props.alignItems};
    justify-content : ${props=> props.jusifyItems};
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