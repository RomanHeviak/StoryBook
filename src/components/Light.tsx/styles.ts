import styled from 'styled-components';

const Wrapper = styled.div<{variant: string, isActive?: boolean}>`
    padding: 20px;
    background: green;
    ${props => `
        background: ${props.variant};
    `}
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 2px solid;
`;

const GroupedWrapper = styled.div`
    background: gray;
    border: 4px solid;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: max-content;
    padding: 10px;
`;

export {
    Wrapper,
    GroupedWrapper
}

