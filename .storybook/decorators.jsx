import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// A super-simple mock of the state of the store
export const MockedState = {
    tasks: [
        { id: '1', title: 'Task 1', status: 'TASK_INBOX' },
        { id: '2', title: 'Task 2', status: 'TASK_INBOX' },
        { id: '3', title: 'Task 3', status: 'TASK_INBOX' },
        { id: '4', title: 'Task 4', status: 'TASK_INBOX' },
        { id: '5', title: 'Task 5', status: 'TASK_INBOX' },
        { id: '6', title: 'Task 6', status: 'TASK_INBOX' },
    ],
    status: 'idle',
    error: null,
};

// A super-simple mock of a redux store
export const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: 'taskbox',
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);