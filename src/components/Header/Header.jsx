import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order you favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our main
          goal is to satisfy your cravings and elevate your dining experinece,
          one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
