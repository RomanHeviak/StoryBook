import styled from 'styled-components';

const StyledInput = styled.input`
    border-collapse: collapse;
    height: 40px;
    padding: 0 12px;
    box-sizing: border-box;
    width: 300px;
    border: none;
    border: 1px solid black;
    border-radius: 4px;

    &:hover,
    &:focus {
        border: 2px solid #685BC7;
    }

    &:disabled {
        cursor: not-allowed;
        background: #F6F6F6;
        color: #B4B5B4;
        border: 1px solid #B4B5B4;
    }

`;

export {
    StyledInput
}
