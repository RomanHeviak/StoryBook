import styled from 'styled-components';

const Wrapper = styled.tbody`
    
`;

const Row = styled.tr`
    height: 40px;
    &:nth-child(even) {
        background: #CCC
    }
`;

const Cell = styled.td`
    text-align: center;
`;


export {
    Wrapper,
    Cell,
    Row
}

