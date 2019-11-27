import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(4);
  const LASTPAGE = Math.ceil(props.numberOfItems / props.itemsPerPage);
  // console.log(LASTPAGE);
  const BeforeLast = LASTPAGE - 1;

  function navigation(e) {
    switch (e.target.innerHTML) {
      case "⟨⟨":
        setCurrentPage(1);
        break;
      case "⟨":
        let prev = currentPage - 1;
        setCurrentPage(prev);
        break;
      case "⟩⟩":
        setCurrentPage(LASTPAGE);
        break;
      case "⟩":
        if (currentPage === LASTPAGE) break;
        let next = currentPage + 1;
        setCurrentPage(next);
        break;
      default:
        setCurrentPage(Number(e.target.innerHTML));
        break;
    }
  }

  useEffect(() => {
    let myEl = document.getElementsByClassName("item");
    Array.from(myEl).forEach(el => {
      el.addEventListener("click", e => navigation(e));
      console.log("effect")
    });
    props.onChangePage(currentPage);
    return Array.from(myEl).forEach(el => {
      el.removeEventListener("click", e => navigation(e));
      console.log("removed")
    });
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
