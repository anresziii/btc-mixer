import React from "react";
import Coin from "./components/Coin";
import Header from "./components/Header";
import Input from "./components/Input";
import Mix from "./components/Mix";
import Per from "./components/Per";
import Text from "./components/Text";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-xl">
        <Text />
        <Input />
        <Coin />
        <Per />
        <Mix />
      </div>
    </div>
  );
}

export default App;
