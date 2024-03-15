import styled from 'styled-components';
import { Button } from '../styles';

const StyledSecondaryButton = styled(Button)`
    border: 1px solid #685BC7;
    color: #041A4D;

    &: hover {
        border-color: #53499F;
        background: #53499F;
        color: white;
    }

    &: disabled {
        background: #F6F6F6;
        color: #B4B5B4;
        border: 1px solid #B4B5B4;
    }
`;

export {
    StyledSecondaryButton
}