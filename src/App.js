import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
