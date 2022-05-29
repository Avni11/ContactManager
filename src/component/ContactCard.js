import React from "react";
//import user from "../images/user.png";
const ContactCard = (props) => {
  const { id, name, email, address, phonenumber, lastname, firstname } =
    props.contact;
  return (
    <div className="item">
      {/*<img className="ui avatar image" src={user} alt="user" />*/}
      <div className="content">
        <div className="header">
          Name:{firstname}
          {lastname}
        </div>
        <div>Email:{email}</div>
        <div>Address:{address}</div>
        <div>Phonenumber:{phonenumber}</div>
      </div>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => props.clickHander(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
