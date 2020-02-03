import React from "react";

const Header = ({ title }) => (
  <header>
    <h2
      style={{
        textAlign: "center",
        aligItem: "center",
        color: "#fff",
        padding: 5,
        marginTop: 10,
        marginBottom: 10
      }}
    >
      {title ? title : "add your title here"}
    </h2>
  </header>
);

export default Header;
