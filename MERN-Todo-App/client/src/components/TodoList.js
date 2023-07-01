import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  listItems,
  isUpdating,
  updateItemText,
  setIsUpdating,
  deleteItem,
  renderUpdateForm,
}) => {
  return (
    <div className="todo-listItems">
      {listItems.map((item) => (
        <TodoItem
          key={item._id}
          item={item}
          isUpdating={isUpdating}
          updateItemText={updateItemText}
          setIsUpdating={setIsUpdating}
          deleteItem={deleteItem}
          renderUpdateForm={renderUpdateForm}
        />
      ))}
    </div>
  );
};

export default TodoList;
