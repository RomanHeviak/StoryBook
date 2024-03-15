import type { Meta, StoryObj } from '@storybook/react';
import Light from '.';
import { GroupedWrapper } from './styles';

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['green', 'red', 'yellow']
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    
}

export const Red: Story = {
    args: {
        variant: 'red'
    }
}


export const Yellow: Story = {
    args: {
        variant: 'yellow'
    }
}

export const Grouped: Story = {
    render: (args) => (
        <GroupedWrapper>
            <Light variant='red' />
            <Light variant='yellow' />
            <Light />
        </GroupedWrapper>
    )
}