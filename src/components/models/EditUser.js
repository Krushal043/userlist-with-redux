import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/userActions";
import { useHistory, useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  const history = useHistory();
  const contact = useSelector((state) => state.contact.contact);
  const dispatch = useDispatch();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact != null) {
      setFirstName(contact.first_name);
      setLastName(contact.last_name);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, []);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      first_name: first_name,
      last_name: last_name,
      email: email,
    });

    dispatch(updateContact(update_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add User</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
