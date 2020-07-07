import React from "react";
import classNames from "classnames";

const Task = ({ task, onChange, onDelete, onSelect }) => {
  const listItemClasses = classNames("list-item", {
    "list-item_done": task.done,
  });
  const listTextClasses = task.done ? "list-item__text " : "";

  return (
    <li className={listItemClasses} onClick={() => onSelect(task)}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={task.done}
        onChange={() => onChange(task.id)}
      />
      <span className={listTextClasses}>{task.text}</span>
      <button className="list-item__comments">{task.comments.length}</button>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(task.id)}
      ></button>
    </li>
  );
};

export default Task;
