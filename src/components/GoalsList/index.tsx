import React from 'react';
import * as S from './styles';

const headers = [
    { title: 'ID', width: 50, id: 'id' },
    { title: 'Title', width: 100, id: 'title' },
    { title: 'Description', width: 300, id: 'description' },
    { title: 'Entered Date', width: 150, id: 'inserted' },
    { title: 'Deadline', width: 150, id: 'deadline' },
]

const data = [
    { id: 1, title: 'New task', description: 'Learn react story book', deadline: '20-01-2024' },
    { id: 2, title: 'New task', description: 'Learn react story book', inserted: '18-10-2023', deadline: '20-01-2204' },
    { id: 3, title: 'New task', description: 'Learn react story book', deadline: '20-01-2024' },
    { id: 4, title: 'New task', description: 'Learn react story book', deadline: '20-01-2024' },
]

const GoalsList = () => {
    return (
        <S.Table data={data} columns={headers} />
    );
};

export default GoalsList;