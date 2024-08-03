import React from "react";
import travel_01 from "./assets/pic1.jpg";
import travel_02 from "./assets/pic2.jpg";
import travel_03 from "./assets/pic3.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imagesrc={travel_01} /> 
      <Slider
        imagesrc={travel_02} 
        title="Be an explorer"
        subtitle="Our platform offers a wide variety of unique locations!"
      />
      <Slider
        imagesrc={travel_03} 
        title="Memories for a lifetime"
        subtitle="Your dream vacation is only a few clicks away!"
        flipped={true}
      />
    </div>
  );
}

export default App;
