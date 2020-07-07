import React, { useState } from "react";

const CreateCommentInput = ({ selectedTask, onCreate }) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleTaskCreate = () => {
    const comment = [value, color];
    onCreate(selectedTask.id, comment);
    setValue("");
  };

  return (
    <div className="create-task">
      <input
        className="create-task__color"
        type="color"
        onChange={handleChangeColor}
      />
      <input
        type="text"
        className="create-task__input"
        value={value}
        onChange={handleChange}
      />

      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateCommentInput;
