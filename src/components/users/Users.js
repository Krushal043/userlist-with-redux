import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/App.scss";
import { listUsers } from "../../actions/userActions";
import Paginate from "./Pagination";
import axios from "axios";
import DispalyUser from "./DispalyUser";
import UserDetails from "./UserDetails";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const [pageCount, setPageCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState();
  const [userDetail, setUserDetail] = useState({
    id: 1,
    first_name: "George",
    last_name: "Bluth",
    email: "george.bluth@reqres.in",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  });

  const handleHovering = (params) => {
    setUserDetail(params);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setPageCount(response.data.total);
      dispatch(listUsers(response.data.data));
    } catch (error) {
      setErrorMessage(true);
      if (error.response.status === 404) {
        setErrorMessage("Page Not Found");
      } else if (error.response.status === 401) {
        console.log("Internal Server Error");
      } else {
        console.log("Error", error.response.status);
      }
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log("contacts", contacts);

  return (
    <div>
      {!errorMessage ? (
        <div className="form">
          <div className="child_form">
            <table className="table_design shadow table-hover">
              <thead className="btn-light text-balck">
                <tr>
                  <th scope="col"></th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Access</th>
                  <th>Oparations</th>
                </tr>
              </thead>

              {contacts.map((contact) => (
                <tbody onMouseEnter={() => handleHovering(contact)}>
                  <DispalyUser contact={contact} key={contact.id} />
                </tbody>
              ))}
            </table>
          </div>

          <div className="child_form">
            <div className="child_form_2">
              <UserDetails details={userDetail} />
            </div>
          </div>
          <div className="child_form_3">
            <Paginate count={pageCount} />
          </div>
        </div>
      ) : (
        { errorMessage }
      )}
    </div>
  );
};

export default Contacts;
