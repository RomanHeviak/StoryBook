import type { Meta, StoryObj } from '@storybook/react';
import Table from '.';

const meta: Meta<typeof Table> = {
    component: Table,
    title: 'Table/Table',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        columns: [
            { title: 'ID', width: 50, id: 'id' },
            { title: 'Title', width: 100, id: 'title' },
            { title: 'Description', width: 300, id: 'description' },
            { title: 'Deadline', width: 100, id: 'deadline' },
        ],
        data: [
            { id: 1, title: 'Task 1', description: 'Learn react story book', deadline: '20-01-24' },
            { id: 2, title: 'Task 2', description: 'Learn react story book', deadline: '20-01-24' },
            { id: 3, title: 'Task 3', description: 'Learn react story book', deadline: '20-01-24' },
            { id: 4, title: 'Task 4', description: 'Learn react story book', deadline: '20-01-24' },
          ]
    }
}