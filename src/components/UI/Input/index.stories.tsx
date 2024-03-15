import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Input',
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        placeholder: 'Test placeholder'
    }
}

export const Disabled: Story = {
    args: {
        placeholder: 'Test placeholder',
        disabled: true
    }
}
