import React from 'react';

const Pagination = ({noOfPages, onPageChange, selectedPage = 1 }) => {
  const arr = new Array(noOfPages).fill(0);
  return (
    <div className="pagination">
     {
       arr.map((val, index)=>(
        <button key={index+1} value={index+1} className={`pagination-button ${index+1 === selectedPage ? 'selected-page': ''}`} onClick={onPageChange}>
          {index+1}
        </button>
       ))
     }
    </div>
  );
}

export default Pagination;
