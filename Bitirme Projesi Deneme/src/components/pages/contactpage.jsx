import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  return (
    <div>
      {" "}
      <React.Fragment>
        <Navbar />
        <Slider />
        <Contact />
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default ContactPage;