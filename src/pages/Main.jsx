import React from "react";
import Collections from "../components/Collections";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Guide from "../components/Guide";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Collections />
      <Guide />
      <Feature />
      <Form />
      <Footer />
    </div>
  );
};

export default Main;
