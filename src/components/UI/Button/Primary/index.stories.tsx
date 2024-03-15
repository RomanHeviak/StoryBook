import type { Meta, StoryObj } from '@storybook/react';
import PrimatyButton from '.';

const meta: Meta<typeof PrimatyButton> = {
    component: PrimatyButton,
    title: 'Button/Primary',
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
    parameters: {
        docs: {
            description: {
              story: `This is **disabled** state.`,
            },
        },
    },
    args: {
        text: 'Submit',
        size: 'md',
        disabled: true
    }
}