import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import About from "../About/About";
import WhyUs from "../WhyUs/WhyUs";
import News from "../News/News";
import Footer from "../Footer/Footer";

const MegaPage = () => {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <Slider />
        <About />
        <WhyUs />
        <News />
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default MegaPage;