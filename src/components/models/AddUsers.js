import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/userActions";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  

  const createContact = (e) => {
    if (
        first_name.replace(/\s+/g, "").length === 0 ||
        last_name.replace(/\s+/g, "").length === 0 ||
        last_name.replace(/\s+/g, "").email === 0
      ) {
        alert("Please enter Values");
      } else {
          e.preventDefault();
          const new_contact = {
            id: shortid.generate(),
            first_name: first_name,
            last_name: last_name,
            email: email,
          };
          dispatch(addContact(new_contact));
          history.push("/");
        };
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add User</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              require="true"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              require="true"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              require="true"
            />
          </div>
          <br />
          <button className="btn btn-primary" type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
