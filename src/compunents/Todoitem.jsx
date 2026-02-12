import React from 'react'
import "./Todoitem.css"

const Todoitem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onUpdate(id)}
      />

      <div className={`content ${isDone ? 'done' : ''}`}>
        {content}
      </div>

      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>

      <button onClick={() => onDelete(id)}>삭제</button>
    </div>

  );
};


export default Todoitem