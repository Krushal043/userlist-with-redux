import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { listUsers } from "../../actions/userActions";
import Paginate from "react-paginate";

const Pagination = () => {
  const dispatch = useDispatch();

  const fetchData = async (currentPage) => {
    try {
      const res = await axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .catch((err) => {
        console.log(err);
      });
    console.log("pagination", res.data);
    return res.data.data;
    } catch (error) {
      console.log(error);
    }
    
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const dataFetch = await fetchData(currentPage);
    dispatch(listUsers(dataFetch));
    console.log(data.selected);
  };

  return (
    <div className="page">
      <Paginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
