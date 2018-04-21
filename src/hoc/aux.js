import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const aux = props => {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default aux;
