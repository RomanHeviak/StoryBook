import React, { FC } from 'react';
import * as S from './styles';
import { ButtonProps } from '../types';

const SecondaryButton:FC<ButtonProps> = (props) => {
    return (
       <S.StyledSecondaryButton {...props}>{props.text}</S.StyledSecondaryButton>
    );
};

export default SecondaryButton;