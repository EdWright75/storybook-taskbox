import PropTypes from 'prop-types';

import Empty from '../Empty/Empty';
import LoadingRows from '../LoadingRows/LoadingRows';
import Task from '../Task/Task';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if (loading) {
        return <LoadingRows rowsToDisplay={6} />
    };

    if (tasks.length === 0) {
        return <Empty />
    }

    const tasksInOrder = [
        ...tasks.filter(t => t.state === `TASK_PINNED`),
        ...tasks.filter(t => t.state !== `TASK_PINNED`),
    ];

    const tasksList = tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />);

    return (
        <div className="list-items">
            {tasksList}
        </div>
    );
};

TaskList.propTypes = {
    /** Checks if it's in loading state */
    loading: PropTypes.bool,
    /** The list of tasks */
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
    /** Event to change the task to pinned */
    onPinTask: PropTypes.func
};
TaskList.defaultProps = {
    loading: false,
};

export default TaskList;