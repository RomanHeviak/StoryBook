import React, { FC } from 'react';
import * as S from './styles';
import { ButtonProps } from '../types';

const PrimatyButton:FC<ButtonProps> = (props) => {
    return (
        <S.StyledPrimaryButton {...props}>{props.text}</S.StyledPrimaryButton>
    );
};

export default PrimatyButton;