import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  console.log(props);
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/add">
        <button class="btn btn-primary">AddContact</button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
