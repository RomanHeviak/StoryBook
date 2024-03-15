import React, { FC } from 'react';
import * as S from './styles';

interface Props {
    columns: { title: string, width: number, id: string }[];
}

const TableHeader:FC<Props> = ({ columns }) => {
    return (
        <S.Wrapper>
            <S.Row>
                {columns.map(col => (
                    <S.Cell width={col.width}>{col.title}</S.Cell>
                ))}
            </S.Row>
        </S.Wrapper>
    );
};

export default TableHeader;