import styled from 'styled-components';
import { Button } from '../styles';

const StyledPrimaryButton = styled(Button)`
    background: #685BC7;
    color: white;

    &: disabled {
        background: #F6F6F6;
        color: #B4B5B4;
        border: 1px solid #B4B5B4;
    }

    &: hover {
        background: #53499F;
        color: white;
    }
`;

export {
    StyledPrimaryButton
}