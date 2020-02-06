import React, { useState } from "react";
import { dataGeneration } from "./dataGen";
import Pagination from "./Pagination";
import "./App.css";

function App() {
  const [data, setData] = useState({
    numberOfItems: 0,
    itemsPerPage: 0,
    pageNumber: 1,
    elements: []
  });

  function requestNewData(q) {
    console.log("app ", q);
    setData(dataGeneration(q));
  }

  return (
    <div className="App">
      {data.elements.map(item => (
        <div key={item}>{item}</div>
      ))}
      <Pagination
        numberOfItems={data.numberOfItems}
        itemsPerPage={data.itemsPerPage}
        pageNumber={data.pageNumber}
        onChangePage={q => requestNewData(q)}
      />
    </div>
  );
}

export default App;
