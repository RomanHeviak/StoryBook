import styled from 'styled-components';

const Button = styled.button<{ size: 'md' | 'lg'}>`
    ${props => `
        ${props.size === 'md' ?
            `
                height: 40px;
            ` :
            `
                height: 48px;
            `
        }
    `}

    min-width: 100px;
    border: none;
    background: none;
    font-size: 16px;
    border-radius: 4px;

    &: disabled {
        cursor: not-allowed;
    }
`;

export {
    Button
}