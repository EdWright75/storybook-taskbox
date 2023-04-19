import React from 'react';

import Task from './Task';

export default {
    component: Task,
    // Note: `` cannot be used here!
    title: 'Task',
};

const Template = args => <Task {...args} />;

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. 
// We use this technique to allow each exported story to set its own properties, but use the same implementation.

export const Default = Template.bind({});
Default.args = {
    task: {
        id: `1`,
        title: `Test Task`,
        state: `TASK_INBOX`,
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: `TASK_PINNED`,
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: `TASK_ARCHIVED`,
    },
};

const longTitleString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur officia error ullam minima quam veniam hic, quas minus dicta nam totam ducimus perspiciatis doloremque nulla fugiat odio quasi soluta inventore enim? Quas nam laboriosam quo aut ab qui sequi eveniet quae dolore, neque distinctio, ipsa provident perferendis odit culpa quidem eligendi corporis ipsam? Natus fugit perspiciatis veniam iure. Maxime minus rem odit quo dignissimos deserunt. Vero, omnis enim. Facere, consequatur? Magnam esse saepe repellat.`

export const LongTitle = Template.bind({});
LongTitle.args = {
    task: {
        ...Default.args.task,
        title: longTitleString,
    },
};
