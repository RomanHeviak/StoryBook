import React from 'react';
import * as S from './styles';

interface IProps {
    variant?: 'red' | 'yellow' | 'green';
};

const Light = ({ variant = 'green' }: IProps) => {
    return (
        <S.Wrapper variant={variant}></S.Wrapper>
    );
};

export default Light;