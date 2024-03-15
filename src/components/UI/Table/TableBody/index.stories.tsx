import type { Meta, StoryObj } from '@storybook/react';
import TableBody from '.';

const meta: Meta<typeof TableBody> = {
    component: TableBody,
    title: 'Table/Body',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        columns: [
            { title: 'Title', width: 100, id: 'title' },
            { title: 'Description', width: 300, id: 'description' },
            { title: 'Deadline', width: 100, id: 'deadline' },
        ],
        data: [
            { title: 'New task', description: 'Learn react story book', deadline: '20-21-24' },
            { title: 'New task', description: 'Learn react story book', deadline: '20-21-24' },
            { title: 'New task', description: 'Learn react story book', deadline: '20-21-24' },
            { title: 'New task', description: 'Learn react story book', deadline: '20-21-24' },
          ]
    }
}