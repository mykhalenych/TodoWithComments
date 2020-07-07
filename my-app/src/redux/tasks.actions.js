import {
  fetchTasksList,
  updateTask,
  deleteTask,
  createTask,
  createComment,
} from "../gateway/tasksGateway";
import { tasksListSelector } from "./tasks.selector";

export const TASK_LIST_RECIVED = "TASK_LIST_RECIVED";
export const GET_TASK = "GET_TASK";

export const taskListRecived = (tasksList) => {
  const action = {
    type: TASK_LIST_RECIVED,
    payload: {
      tasksList,
    },
  };
  return action;
};
export const selecedTaskRecived = (selectTask) => {
  const action = {
    type: GET_TASK,
    payload: {
      selectTask,
    },
  };
  return action;
};

export const getTasksList = () => {
  const thunkAction = function (dispatch) {
    fetchTasksList().then((tasksList) => dispatch(taskListRecived(tasksList)));
  };
  return thunkAction;
};

export const updateTaskList = (id) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === id);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    updateTask(id, updatedTask).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const deleteTaskList = (id) => {
  const thunkAction = function (dispatch) {
    deleteTask(id).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const createTaskList = (text) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
    };
    createTask(taskData).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};
export const selectTask = (task) => {
  return { type: GET_TASK, payload: task };
};

export const createCommentList = (id, text) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === id);
    try {
      const taskData = {
        ...task,
        comments: [...task.comments, text],
        done: false,
      };
      createComment(id, taskData).then(() => dispatch(getTasksList()));
    } catch (error) {
      console.error(error);
    }
  };
  return thunkAction;
};
