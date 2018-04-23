import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const aux = props => {
  return (
    <div>
      <Nav {...props} />
      <div
        style={
          props.match.url === "/detail"
            ? { marginTop: "0px" }
            : { marginTop: "60px" }
        }
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default aux;
