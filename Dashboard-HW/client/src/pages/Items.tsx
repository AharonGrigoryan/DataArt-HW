import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseItem } from "../interfaceItems";
import Card from "../components/Card";
import Header from "../components/Header";

const Items: React.FC = ({ value }: any) => {
  const [items, setItems] = useState<BaseItem[]>([]);

  useEffect(() => {
    const fechtAllItems = async () => {
      try {
        const res = await axios.get<BaseItem[]>(
          "http://localhost:7000/api/menu/items"
        );
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fechtAllItems();
  }, []);

  const handleDelete = async (id: number | null) => {
    try {
      await axios.delete(`http://localhost:7000/api/menu/items/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid-items">
      <Header page="Add New Item" pageName="Menu Items" paths="/add" />
      <div className="items">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="item">
              <Card
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                cover={item.cover}
                handleDelete={() => handleDelete(item.id)}
              />
            </div>
          ))
        ) : (
          <h2 className="no-items">There are no items (</h2>
        )}
      </div>
    </div>
  );
};

export default Items;
