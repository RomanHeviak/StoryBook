import styled from 'styled-components';

const Wrapper = styled.thead`
    background: black;
    color: white;
`;

const Row = styled.tr`

`;

const Cell = styled.th<{ width: number }>`
    ${props => `
        width: ${props.width}px;
    `}
    padding: 8px;
`;

export {
    Wrapper,
    Row, 
    Cell
}