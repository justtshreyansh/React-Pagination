import React from 'react';
import "./Pagination.css";
const Pagination = ({ originalData, setCurrentPage, currentPage, elementPerPage }) => {
  const totalPages = Math.ceil(originalData.length / elementPerPage);

return (
  <div className="pagination-wrapper">
    <div className='column'>
<button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
    <p>page {currentPage} of {totalPages}</p>
    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
    
    
    <p>showing {(currentPage - 1) * elementPerPage + 1} - {Math.min(currentPage * elementPerPage, originalData.length)} of {originalData.length} entries</p>
  </div>
);
};

export default Pagination;
