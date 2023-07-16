import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BaseItem } from "../interfaceItems";

const Add = () => {
  const [items, setItems] = useState<BaseItem>({
    id: null,
    name: "Default Name",
    price: 59,
    description: "Lorem ipsum dolor sit, amen consectetur ",
    cover:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxwcm9kdWN0fGVufDB8fHx8MTY4OTUzNTA4OHww&amp;ixlib=rb-4.0.3&amp;w=200",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItems((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/api/menu/items", items);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="grid-items">
      <Header page="Cancel" pageName="Add Menu Item" paths="/" />
      <div className="form">
        <h2>Add New Items</h2>
        <input
          type="text"
          placeholder="Item name"
          name="name"
          onChange={handleChange}
          value={items.name}
        />
        <textarea
          rows={5}
          placeholder="Item desc"
          name="description"
          onChange={handleChange}
          value={items.description}
        />
        <input
          type="number"
          placeholder="Item price"
          name="price"
          onChange={handleChange}
          value={items.price !== null ? items.price : ""}
        />
        <input
          type="text"
          placeholder="Item cover"
          name="cover"
          onChange={handleChange}
          value={items.cover}
        />
        <button id="add-btn" onClick={handleClick}>
          Add
        </button>
        {error && "Something went wrong!"}
        <Link to="/">See all items</Link>
      </div>
    </div>
  );
};

export default Add;
