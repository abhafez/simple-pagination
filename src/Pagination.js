import React, { useState } from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";
function Pagination({ numberOfItems, itemsPerPage, onChangePage, pageNumber }) {
  const [currentPage, setCurrentPage] = useState(
    pageNumber === 0 ? 1 : pageNumber
  );
  const LASTPAGE = Math.ceil(numberOfItems / itemsPerPage);
  const BEFORELAST = LASTPAGE - 1;
  const handleChangePage = pageNo => {
    setCurrentPage(pageNo);
    onChangePage(pageNo);
  };
  const previousButtons = () => (
    <>
      <div
        aria-current="false"
        aria-disabled="false"
        tabIndex="0"
        value="1"
        aria-label="Previous item"
        type="firstItem"
        className={`${currentPage === 1 ? "disabled item" : "item"}`}
        onClick={() => {
          handleChangePage(1);
        }}
      >
        ⟨⟨
      </div>
      <div
        aria-current="false"
        aria-disabled="false"
        tabIndex="0"
        aria-label="Previous item"
        type="prevItem"
        className={`${
          currentPage === 1 || LASTPAGE === 1 ? "disabled item" : "item"
        }`}
        onClick={() => {
          if (currentPage === 1) return;
          let prev = currentPage - 1;
          handleChangePage(prev);
        }}
      >
        ⟨
      </div>
    </>
  );
  const sequence = item => (
    <div
      key={item}
      aria-current={`${currentPage === item ? "true" : "false"}`}
      aria-disabled="false"
      tabIndex="0"
      value={item}
      type="pageItem"
      className={`${currentPage === item ? "active item" : "item"}`}
      onClick={() => handleChangePage(item)}
    >
      {item}
    </div>
  );
  const nextButtons = () => (
    <>
      <div
        aria-current="false"
        aria-disabled="false"
        aria-label="Next item"
        type="nextItem"
        className={`${
          currentPage === LASTPAGE || LASTPAGE === 1 ? "disabled item" : "item"
        }`}
        onClick={() => {
          if (currentPage === LASTPAGE) return;
          let next = currentPage + 1;
          handleChangePage(next);
        }}
      >
        ⟩
      </div>
      <div
        aria-current="false"
        aria-disabled="false"
        // @ts-ignore
        tabIndex="0"
        aria-label="Next item"
        type="nextItem"
        className={`${currentPage === LASTPAGE ? "disabled item" : "item"}`}
        onClick={() => handleChangePage(LASTPAGE)}
      >
        ⟩⟩
      </div>
    </>
  );
  return (
    <div
      id="pagination-element"
      aria-label="Pagination Navigation"
      role="navigation"
      className="ui pagination menu"
    >
      {previousButtons()}
      {LASTPAGE === 1 && [1].map(item => sequence(item))}
      {LASTPAGE === 2 && [1, 2].map(item => sequence(item))}
      {LASTPAGE === 3 && [1, 2, 3].map(item => sequence(item))}
      {LASTPAGE > 3 &&
        currentPage > 3 &&
        currentPage >= BEFORELAST &&
        [BEFORELAST - 1, BEFORELAST, LASTPAGE].map(item => sequence(item))}
      {LASTPAGE > 3 &&
        currentPage > 3 &&
        currentPage < BEFORELAST &&
        [currentPage - 1, currentPage, currentPage + 1].map(item =>
          sequence(item)
        )}
      {LASTPAGE > 3 &&
        currentPage === 3 &&
        [2, 3, 4].map(item => sequence(item))}
      {LASTPAGE > 3 && currentPage < 3 && [1, 2, 3].map(item => sequence(item))}
      {nextButtons()}
    </div>
  );
}
Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  numberOfItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
