import styled from 'styled-components';

export const Image = styled.img`
    src : url(${props=>props.src});
    width: ${props=>props.width};    
    height: ${props=>props.height};    
    margin : auto;
`;