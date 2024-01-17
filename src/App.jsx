import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GameContainer from "./components/GameContainer/GameContainer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <GameContainer />
        <GameContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
