import React from "react";

const Form = () => {
  return (
    <div className="form">
      <h1>Keep in touch</h1>
      <h4>
        Get our travel advice, global views and travel freebies in your inbox
      </h4>
      <form>
        <div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
      </form>
      <button className="blackBtn">Subscribe</button>
    </div>
  );
};

export default Form;
