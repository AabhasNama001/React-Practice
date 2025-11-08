import React from "react";
import Slider from "./pages/Slider";
import Carousel from "./pages/Carousel";
import Gsap from "./pages/Gsap";
import GsapImages from "./pages/GsapImages";
import Loader from "./pages/Loader";
import TiltCard from "./pages/TiltCard";

const App = () => {
  return (
    <div>
      <Loader />
      <Slider />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Carousel />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Gsap />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TiltCard />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <GsapImages />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default App;
