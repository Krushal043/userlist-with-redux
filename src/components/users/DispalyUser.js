import React from "react";
import "../../styles/App.scss";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const { first_name, last_name, avatar, email,id } = contact;
  
  return (
    <tr>
      <td>
        <div className="custom-control">
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <div className="user_details">
          <img src={avatar} alt="Avatar" />
          <div className="user_fullname">
            <div>
              {first_name} {last_name}
            </div>
            <div>
              <b> {email}</b>
            </div>
          </div>
        </div>
      </td>
      <td>
        {email === "george.bluth@reqres.in" ? (
          <div className="select btn-light">Active</div>
        ) : (
          <select className="select btn-light">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="busy">Busy</option>
            <option value="away">Away</option>
          </select>
        )}
      </td>
      <td>
        {email === "george.bluth@reqres.in" ? (
          <div className="select btn-light">Owner</div>
        ) : (
          <select className="select btn-light">
            <option value="manager">Manger</option>
            <option value="leader">Leader</option>
            <option value="trinee">Trinee</option>
          </select>
        )}
      </td>
      <td className="actions">
        {email === "george.bluth@reqres.in" ? (
          <div>
            <span className="material-icons btn-light select">lock</span>
          </div>
        ) : (
          <div>
            <Link
              to={`/contacts/edit/${id}`}
              className="material-icons btn-light select mr-2"
            >
              edit
            </Link>
            <Link
              to="#"
              className="material-icons btn-light select text-danger"
            >
              delete
            </Link>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Contact;
