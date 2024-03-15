import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from '.';

const meta: Meta<typeof TableHeader> = {
    component: TableHeader,
    title: 'Table/Header',
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
            { title: 'Entered Date', width: 150, id: 'inserted' },
            { title: 'Deadline', width: 150, id: 'deadline' },
        ]
    }
}