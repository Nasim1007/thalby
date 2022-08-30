import React from "react";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <h1>
            Fall deeper in love with <br />
            humanity.
          </h1>
          <p>
            Get to know the world through our concise, informative and inspiring
            guides.
          </p>
          <button className="blackBtn">Show now</button>
        </li>
        <li>
          <img src="img/phone_img.png" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
