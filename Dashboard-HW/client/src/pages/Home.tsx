import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header pageName="Howdy" page="Settings" paths="/settings" />
      <p>To start using the Dashboard, please sign in.</p>
    </div>
  );
};

export default Home;
