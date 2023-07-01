import React from "react";

const TodoItem = ({
  item,
  isUpdating,
  updateItemText,
  setIsUpdating,
  deleteItem,
  renderUpdateForm,
}) => {
  return (
    <div className="todo-item">
      {isUpdating === item._id ? (
        renderUpdateForm()
      ) : (
        <>
          <p className="item-content">{item.item}</p>
          <button
            className="update-item"
            onClick={() => {
              setIsUpdating(item._id);
            }}
          >
            Update
          </button>
          <button
            className="delete-item"
            onClick={() => {
              deleteItem(item._id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
