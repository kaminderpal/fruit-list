import styled from 'styled-components';

export const Image = styled.img`
    src : url(${props=>props.src});
    width: 100%;    
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
`;