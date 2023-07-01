import axios from "axios";
import { useState } from "react";

export const useTodoFunctions = () => {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");

  // Add new todo item to the database
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/api/item", {
        item: itemText,
      });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
    } catch (err) {
      console.log(err);
    }
  };

  // Delete item when clicked on delete
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/api/item/${id}`);
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // Update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5050/api/item/${isUpdating}`,
        { item: updateItemText }
      );
      console.log(res.data);
      const updatedItemIndex = listItems.findIndex(
        (item) => item._id === isUpdating
      );
      listItems[updatedItemIndex].item = updateItemText;

      setUpdateItemText("");
      setIsUpdating("");
    } catch (err) {
      console.log(err);
    }
  };

  return {
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
  };
};
