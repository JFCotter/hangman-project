import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GameContainer from "./components/GameContainer/GameContainer.jsx";
import "./Globals.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <GameContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
