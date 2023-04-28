import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Hotels from "./component/Hotels";
import News from "./component/News";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Hotels />
      <News />
      <Footer/>
    </div>
  );
}

export default App;
