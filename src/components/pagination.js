import React from "react";
import { Pagination } from "react-bootstrap";

const Paginations = ({ productsPerpage, totalProducts, pagination }) => {
  let pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalProducts / productsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className="pagination">
     
        {pageNumbers.map((page) => (

          <Pagination.Item key={page}>
            <span className="page-link" onClick={() => pagination(page)}>
              {page}
            </span>

          </Pagination.Item>
        ))}
      
    </Pagination>
  );
};
export default Paginations;
