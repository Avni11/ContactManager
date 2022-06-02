import React from "react";
import { Link } from "react-router-dom";
const ContactDetail = (props) => {
  const { firstname, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{firstname}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button class="btn btn-primary">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
