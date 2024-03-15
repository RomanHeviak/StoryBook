import React, { FC } from 'react';
import * as S from './styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

interface Props {
    data: any[];
    columns: { id: string, title: string, width: number }[],
    className?: string;
}

/**
 * Table which we are using in our app!!!
 * 
 * Can be any comment here!!!
 * 
 * ==highlighted text using markdown==
 * 
 * **semibold text**
 *  
 */
const Table:FC<Props> = ({ data, columns, className }) => {
    return (
        <S.List className={className}>
            <TableHeader columns={columns} />
            <TableBody data={data} columns={columns} />
        </S.List>
    );
};

export default Table;