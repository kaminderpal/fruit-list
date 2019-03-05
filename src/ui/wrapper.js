import styled from 'styled-components';

export const Wrapper = styled.div`
    display: ${props=>props.display};
    align-items : ${props=>props.alignItems};
    justify-content: ${props=>props.justifyContent};
    flex-wrap : ${props=>props.flexWrap};
    margin-left: ${props=>props.marginLeft};
    margin-right: ${props=>props.marginRight};
`;

