import React, { useEffect } from "react";
import axios from "axios";
import "./App.scss";
import TodoList from "./components/TodoList";
import { useTodoFunctions } from "./api";

function App() {
  const {
    itemText,
    setItemText,
    listItems,
    setListItems,
    isUpdating,
    setIsUpdating,
    updateItemText,
    setUpdateItemText,
    addItem,
    deleteItem,
    updateItem,
  } = useTodoFunctions();

  // Fetch all todo items from the database using useEffect hook
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/items");
        setListItems(res.data);
        console.log("render");
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  // Before updating item, show input field where we will create the updated item
  const renderUpdateForm = () => (
    <form
      className="update-form"
      onSubmit={(e) => {
        updateItem(e);
      }}
    >
      <input
        className="update-new-input"
        type="text"
        placeholder="Update Item"
        onChange={(e) => {
          setUpdateItemText(e.target.value);
        }}
        value={updateItemText}
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={(e) => addItem(e)}>
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
        />
        <button type="submit">Add</button>
      </form>
      <TodoList
        listItems={listItems}
        isUpdating={isUpdating}
        updateItemText={updateItemText}
        setIsUpdating={setIsUpdating}
        deleteItem={deleteItem}
        renderUpdateForm={renderUpdateForm}
      />
    </div>
  );
}

export default App;
