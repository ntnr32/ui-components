import type { Meta, StoryObj } from '@storybook/react';

import { NewButton } from './NewButton';



// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: 'Example/NewButton',
    component: NewButton,
    tags: ['autodocs'],
    argTypes: {
        intent: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        }
    },
} satisfies Meta<typeof NewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        intent: 'primary',
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        intent: 'secondary',
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        intent: 'secondary',
        size: 'large',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        intent: 'secondary',
        size: 'small',
        label: 'Button',
    },
};
