import React from "react";
import Global from "./styles/global";
import Preloader from "./components/Preloader";

import HomePage from "./pages/Home";
function App() {
  return (
    <>
      <Global />
      <Preloader />
      <HomePage />
    </>
  );
}

export default App;
