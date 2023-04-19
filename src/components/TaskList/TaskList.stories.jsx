import React from "react";

import TaskList from './TaskList';
// import * as TaskStories from '../Task/Task.stories';
import { MockedState, Mockstore } from "../../../.storybook/decorators";

export default {
    component: TaskList,
    title: 'TaskList',
    // Decorators are a way to provide arbitrary wrappers to stories.
    // In this case we’re using a decorator key on the default export to add some padding around the rendered component.
    //They can also be used to wrap stories in “providers”-–i.e., library components that set React context.
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

// ...args no longer needed with introduction of Redux Store
// const Template = args => <TaskList {...args} />;
const Template = () => <TaskList />

export const Default = Template.bind();
// .args no longer needed with introduction of Redux Store
// Default.args = {
//     // Shaping the stories through args composition.
//     // The data was inherited from the Default story in Task.stories.jsx.
//     tasks: [
//         { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
//         { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
//         { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
//         { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
//         { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
//         { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
//     ],
// };
// However, we do need to tel <TaskList /> that it is decorated with a Mockstore that has a MockedState!
Default.decorators = [
    story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
];

export const WithPinnedTasks = Template.bind({});
// .args no longer needed with introduction of Redux Store
// WithPinnedTasks.args = {
//     // Shaping the stories through args composition.
//     // Inherited data coming from the Default story.
//     tasks: [
//         ...Default.args.tasks.slice(0, 5),
//         { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
//     ],
// };
// However, we do need to tel <TaskList /> that it is decorated with a Mockstore that has a MockedState - which we will modify!
WithPinnedTasks.decorators = [
    story => {
        const pinnedTasks = [...MockedState.tasks.slice(0, 5), { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }];
        return <Mockstore taskboxState={{ ...MockedState, tasks: pinnedTasks }}>{story()}</Mockstore>
    },
];


export const Loading = Template.bind({});
// .args no longer needed with introduction of Redux Store
// Loading.args = {
//     tasks: [],
//     loading: true,
// };
// However, we do need to tel <TaskList /> that it is decorated with a Mockstore that has a MockedState - which we will modify!
Loading.decorators = [
    story => <Mockstore taskboxState={{ MockedState, tasks: [], status: 'loading' }}>{story()}</Mockstore>,
];

export const Empty = Template.bind({});
// .args no longer needed with introduction of Redux Store
// Empty.args = {
//     // Shaping the stories through args composition.
//     // Inherited data coming from the Loading story.
//     ...Loading.args,
//     loading: false,
// };
// However, we do need to tel <TaskList /> that it is decorated with a Mockstore that has a MockedState - which we will modify!
Empty.decorators = [
    story => <Mockstore taskboxState={{ MockedState, tasks: [] }}>{story()}</Mockstore>,
];
