import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../../lib/store";
import Error from "../../components/Error/Error";
import TaskList from "../../components/TaskList/TaskList";

const InboxScreen = () => {
    const dispatch = useDispatch();
    // Retrieve the error field from updated store
    const { error } = useSelector(state => state.taskbox);

    // The useEffect triggers the data fetching when the component is mounted
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    if (error) {
        console.log(error);
        return <Error />
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">Taskbox</h1>
            </nav>
            <TaskList />
        </div>
    );
};

export default InboxScreen;