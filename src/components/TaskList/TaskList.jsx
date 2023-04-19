import Task from '../Task/Task';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if (loading) {
        return <div className="list-items">Loading...</div>
    };

    if (tasks.length === 0) {
        return <div className="list-items">No tasks to display</div>
    }

    const tasksList = tasks.map(task => <Task key={task.id} task={task} {...events} />);

    return (
        <div className="list-items">
            {tasksList}
        </div>
    );
};

export default TaskList;