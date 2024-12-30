import React from "react";

const Pagination = ({ currentPage, totalItems, itemsPerPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pageStart = Math.max(1, currentPage - 2);
  const pageEnd = Math.min(totalPages, currentPage + 2);
  const pageDisplay = pageNumbers.slice(pageStart - 1, pageEnd);

  return (
    <div className="pagination mb-4">
      <button
        className="page-link"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageDisplay.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`page-link ${currentPage === number ? "active" : ""}`}
        >
          {number}
        </button>
      ))}

      <button
        className="page-link"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
