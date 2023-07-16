import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BaseItem } from "../interfaceItems";

const Update = () => {
  const [item, setItem] = useState<BaseItem>({
    id: null,
    name: "",
    description: "",
    price: 0,
    cover: "",
  });

  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const itemId = location.pathname.split("/")[2];

  useEffect(() => {
    // Fetch the item from the server using the itemId
    const fetchItem = async (itemId: string) => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/menu/items/${itemId}`
        );

        setItem(response.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchItem(itemId);
  }, [itemId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:7000/api/menu/items/${itemId}`, item);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const ClearhandleClick = () => {
    setItem({
      id: null,
      name: "",
      description: "",
      price: 0,
      cover: "",
    });
  };

  return (
    <div className="grid-items">
      <Header page="Cancel" pageName="Update The Item" paths="/" />
      <div className="form">
        <input
          type="text"
          placeholder="Item name"
          name="name"
          onChange={handleChange}
          value={item.name}
        />
        <textarea
          rows={5}
          placeholder="Item desc"
          name="description"
          onChange={handleChange}
          value={item.description}
        />
        <input
          type="number"
          placeholder="Item price"
          name="price"
          onChange={handleChange}
          value={item.price !== null ? item.price : ""} // Use a default value or empty string if items.price is null
        />
        <input
          type="text"
          placeholder="Item cover"
          name="cover"
          onChange={handleChange}
          value={item.cover}
        />
        <button className="cart-btn update-button" onClick={handleClick}>
          Update
        </button>
        <button className="cart-btn delete-button" onClick={ClearhandleClick}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Update;
