import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(4);
  const LASTPAGE = Math.ceil(props.numberOfItems / props.itemsPerPage);
  const BeforeLast = LASTPAGE - 1;

  function navigation(e) {
    switch (e.target.innerHTML) {
    }
  }

  useEffect(() => {
    let index = currentPage - 1;
    props.onChangePage(index);
  }, [currentPage]);

  const sequence = item => (
    <div
      key={item}
      aria-current={`${currentPage === item ? "true" : "false"}`}
      aria-disabled="false"
      tabIndex="0"
      value={item}
      type="pageItem"
      className={`${currentPage === item ? "active item" : "item"}`}
      onClick={e => setCurrentPage(Number(e.target.innerHTML))}
    >
      {item}
    </div>
  );

  return (
    <div
      id="pagination-element"
      aria-label="Pagination Navigation"
      role="navigation"
      className="ui pagination menu"
    >
      <div
        aria-current="false"
        aria-disabled="false"
        tabIndex="0"
        value="1"
        aria-label="Previous item"
        type="firstItem"
        className="item"
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        ⟨⟨
      </div>
      <div
        aria-current="false"
        aria-disabled="false"
        tabIndex="0"
        // value="1"
        aria-label="Previous item"
        type="prevItem"
        className="item"
        onClick={() => {
          let prev = currentPage - 1;
          setCurrentPage(prev);
        }}
      >
        ⟨
      </div>
      {currentPage <= 2 && [1, 2, 3].map(item => sequence(item))}
      {currentPage >= BeforeLast &&
        [BeforeLast - 1, BeforeLast, LASTPAGE].map(item => sequence(item))}
      {currentPage > 2 &&
        currentPage < BeforeLast &&
        [currentPage - 1, currentPage, currentPage + 1].map(item =>
          sequence(item)
        )}
      <div
        aria-current="false"
        aria-disabled="false"
        tabIndex="0"
        // value="2"
        aria-label="Next item"
        type="nextItem"
        className="item"
        onClick={() => {
          if (currentPage === LASTPAGE) return;
          let next = currentPage + 1;
          setCurrentPage(next);
        }}
      >
        ⟩
      </div>
      <div
        aria-current="false"
        aria-disabled="false"
        tabIndex="0"
        // value="2"
        aria-label="Next item"
        type="nextItem"
        className="item"
        onClick={() => setCurrentPage(LASTPAGE)}
      >
        ⟩⟩
      </div>
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
