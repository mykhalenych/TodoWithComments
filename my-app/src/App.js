import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Task from "./components/Task.jsx";
import Comment from "./components/Comment.jsx";
import CreateTaskInput from "./components/CreateTaskInput.jsx";
import CreateCommentInput from "./components/CreateCommentInput.jsx";
import {
  tasksListSelector,
  selectedTaskSelector,
} from "./redux/tasks.selector";
import * as actions from "./redux/tasks.actions";

const App = ({
  getTasksList,
  tasks,
  updateTaskList,
  createTaskList,
  deleteTaskList,
  getTask,
  selectedTask,
  createComent,
}) => {
  useEffect(() => {
    getTasksList();
  }, [selectedTask]);

  const sorteList = tasks.slice().sort((a, b) => a.done - b.done);
  return (
    <div className="form">
      <div className="todo-list">
        <h2 className="title">Items</h2>
        <CreateTaskInput onCreate={createTaskList} />
        <ul className="list">
          {sorteList.map((task) => (
            <Task
              task={task}
              key={task.id}
              onChange={updateTaskList}
              onDelete={deleteTaskList}
              onSelect={getTask}
            />
          ))}
        </ul>
      </div>
      <div className="comment-list">
        <h2 className="title">
          {selectedTask.id === undefined
            ? "Comments"
            : `Comments #${selectedTask.id}`}
        </h2>
        <CreateCommentInput
          selectedTask={selectedTask}
          onCreate={createComent}
        />
        <Comment selectedTask={selectedTask} />
      </div>
    </div>
  );
};

App.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  createTaskList: PropTypes.func,
  deleteTaskList: PropTypes.func,
  updateTaskList: PropTypes.func,
  createComent: PropTypes.func,
};

const mapDispatch = {
  getTasksList: actions.getTasksList,
  updateTaskList: actions.updateTaskList,
  deleteTaskList: actions.deleteTaskList,
  createTaskList: actions.createTaskList,
  getTask: actions.selectTask,
  createComent: actions.createCommentList,
};

const mapState = (state) => {
  return {
    tasks: tasksListSelector(state),
    selectedTask: selectedTaskSelector(state),
  };
};
export default connect(mapState, mapDispatch)(App);
