import React from "react";

const Comment = ({ selectedTask }) => {
  if (!selectedTask.comments) {
    return (
      <li className="list-item">
        <span>No comments</span>
      </li>
    );
  }
  return (
    <div className="comments">
      {selectedTask.comments.length === 0 ? (
        <li className="list-item" key={Math.random() * 10000}>
          <span>No comments</span>
        </li>
      ) : (
        selectedTask.comments.map((item) => (
          <li className="list-item">
            <span
              className="list-item__color"
              style={{ backgroundColor: `${item[1]}` }}
            ></span>
            <span>{item[0]}</span>
          </li>
        ))
      )}
    </div>
  );
};

export default Comment;
