// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { updateTaskState } from '../../lib/store';

import Empty from '../Empty/Empty';
import LoadingRows from '../LoadingRows/LoadingRows';
import Task from '../Task/Task';

const TaskList = (/*{ loading, tasks, onPinTask, onArchiveTask }*/) => {

    // Remove props and retrieve the states from the store
    const tasks = useSelector(state => {
        const tasksInOrder = [
            ...state.taskbox.tasks?.filter(t => t.state === `TASK_PINNED`),
            ...state.taskbox.tasks?.filter(t => t.state !== `TASK_PINNED`),
        ];
        // Change arguments to match new functions
        // const tasksList = tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />);
        const tasksList = tasksInOrder.map(task => (
            <Task key={task.id} task={task} onPinTask={task => pinTask(task)} onArchiveTask={task => archiveTask(task)} />
        ));
        return tasksList;
    });

    const { status } = useSelector(state => state.taskbox);

    const dispatch = useDispatch();

    // Replace this with definitions of the actual functions
    // const events = {
    //     onPinTask,
    //     onArchiveTask,
    // };

    const pinTask = value => {
        // Dispatch the Pinned event back to the store
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
    }

    const archiveTask = value => {
        // Dispatch the Archived event back to the store
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
    }

    // Change this to evaluate application status
    // if (loading) {
    if (status === `loading`) {
        return <LoadingRows rowsToDisplay={6} />
    };

    if (tasks.length === 0) {
        return <Empty />
    }

    // Move into useSelector:
    // const tasksInOrder = [
    //     ...tasks.filter(t => t.state === `TASK_PINNED`),
    //     ...tasks.filter(t => t.state !== `TASK_PINNED`),
    // ];

    // Move into useSelector:
    // const tasksList = tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />);

    return (
        <div className="list-items" data-testid="success">
            {/* Render tasks instead */}
            {/* {tasksList} */}
            {tasks}
        </div>
    );
};

// TaskList.propTypes = {
//     /** Checks if it's in loading state */
//     loading: PropTypes.bool,
//     /** The list of tasks */
//     tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
//     /** Event to change the task to archived */
//     onArchiveTask: PropTypes.func,
//     /** Event to change the task to pinned */
//     onPinTask: PropTypes.func
// };
// TaskList.defaultProps = {
//     loading: false,
// };

export default TaskList;