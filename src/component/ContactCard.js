import React from "react";
//import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, email, address, phonenumber, lastname, firstname } =
    props.contact;
  return (
    <Link
      to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
    >
      <div className="item">
        <div className="content">
          <div className="header">
            <img
              src="https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-37-512.png"
              width="25"
              height="25"
            />
            {firstname}
            {lastname}
          </div>
          <div>
            <img
              src="https://www.seekpng.com/png/detail/41-415678_email-icon-vector-circle.png"
              width="25"
              height="25"
            ></img>
            {email}
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XL_-n6VdbJr9mdz36pXEQ9TTFf1Gh4lx5w&usqp=CAU"
              width="25"
              height="25"
            ></img>
            {address}
          </div>
          <div>
            <img
              src="https://png.pngtree.com/png-clipart/20201113/ourmid/pngtree-phone-icon-with-square-black-frame-png-image_5578524.png"
              width="25"
              height="25"
            ></img>
            {phonenumber}
          </div>
        </div>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => props.clickHander(id)}
        >
          Delete
        </button>
      </div>
    </Link>
  );
};

export default ContactCard;
