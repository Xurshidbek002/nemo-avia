import React, { useEffect } from "react";
import Header from "./Components/Header";
import Avia from "./Components/Avia";
import Information from "./Components/Information";
import "aos/dist/aos.css";
import Aos from "aos";
import Motion from "./Components/Motion";
import Turlar from "./Components/Turlar";
import Hotel from "./Components/Hotel";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Header />
      <Avia />
      <Information />
      <Motion />
      <Turlar/>
      <Hotel/>
      
    </div>
  );
}

export default App;
