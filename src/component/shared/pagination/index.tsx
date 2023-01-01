import React from "react";
import { pageSize } from "util/constants";
import "./styles.css";

interface Params {
  actualPage: number;
  pageSize?: number;
  totalRecords: number;
  handleClick: (page: number) => void;
}

const Pagination = ({ actualPage = 1, totalRecords, handleClick }: Params) => {
  const lastPage = Math.ceil(totalRecords / pageSize) || 0;
  const lastPageParsed = lastPage - 1;

  const pages: number[] = Array.from({ length: lastPage }, (e, i) => i);

  return (
    <div className="pagination">
      <button
        className="pagination-item"
        onClick={() => handleClick(0)}
        disabled={actualPage === 0}
      >
        {"<<"}
      </button>
      <button
        className="pagination-item"
        onClick={() => handleClick(actualPage - 1)}
        disabled={actualPage === 0}
      >
        {"<"}
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={`pagination-item ${actualPage === page ? " active" : ""}`}
          onClick={() => handleClick(page)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className="pagination-item"
        onClick={() => handleClick(actualPage + 1)}
        disabled={actualPage === lastPageParsed}
      >
        {">"}
      </button>
      <button
        className="pagination-item"
        onClick={() => handleClick(lastPageParsed)}
        disabled={actualPage === lastPageParsed}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
