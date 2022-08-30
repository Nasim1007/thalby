import React from "react";

const Navbar = () => {
  const menu = ["Shop", "Collections", "Try a Free Guide", "Stories"];
  return (
    <div className="navbar">
      <ul>
        {menu.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className="logo">
        <img src="img/thalby.png" alt="thalby" />
      </div>
      <div className="contact">
        <img src="img/inst.png" style={{ width: "20px", heigh: "20px" }} />
        <img src="img/search.png" style={{ width: "40px", heigh: "20px" }} />
        <img src="img/cart.png" style={{ width: "30px", heigh: "20px" }} />
      </div>
    </div>
  );
};

export default Navbar;
