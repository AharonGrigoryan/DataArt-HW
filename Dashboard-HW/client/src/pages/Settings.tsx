import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../components/Header";

const Settings = () => {
  const [localhost, setLocalhost] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get(localhost);
      const items = response.data;
      setItems(items);
      setError("");
    } catch (error) {
      console.error("Error retrieving items:", error);
      setError("Error retrieving items. Please try again.");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalhost(event.target.value);
  };
  return (
    <div className="item-display">
      <Header pageName="API Configuration" page="Cancel" paths="/" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="localhost">Enter the full API Server Base URL:</label>
        <input
          type="text"
          name="localhost"
          id="localhost"
          placeholder="API Server Base URL:"
          value={localhost}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {items.length > 0 && (
        <div>
          <h2>Items:</h2>
          <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Settings;
