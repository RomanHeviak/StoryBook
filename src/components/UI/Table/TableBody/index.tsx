import React, { FC } from 'react';
import * as S from './styles';

interface Props {
    columns: { id: string, title: string, width: number }[];
    data: any[];
}

const TableBody:FC<Props> = ({ data, columns }) => {
    
    return (
        <S.Wrapper>
            {data.map(row => (
                <S.Row>
                    {columns.map(cell => (
                        <S.Cell width={cell.width}>{row[cell.id]}</S.Cell>
                    ))}
                </S.Row>
            ))}
        </S.Wrapper>
    );
};

export default TableBody;