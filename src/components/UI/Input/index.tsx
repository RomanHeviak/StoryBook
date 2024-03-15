import React, { FC } from 'react';
import * as S from './styles';
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: FC<Props> = (props) => {
    return (
        <S.StyledInput {...props} />
    );
};

export default Input;