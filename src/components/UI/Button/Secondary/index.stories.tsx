import type { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from './index';

const meta: Meta<typeof SecondaryButton> = {
    component: SecondaryButton,
    title: 'Button/Secondary',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['md', 'lg']
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        text: 'Submit',
        size: 'md',
        disabled: false
    }
}

export const Disabled: Story = {
    args: {
        text: 'Submit',
        size: 'md',
        disabled: true
    }
}