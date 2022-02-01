import React, { useEffect, useState } from "react";
import "./PriceList.css";

function PriceList({ filteredList }) {
  const LaureateNames = ({ nameList }) => {
    if (nameList) {
      console.log(nameList.length);
      return nameList.map((item, index) => (
        <p key={item.id}>
          {item.firstname}&nbsp;
          {item.surname}
          {index + 1 == nameList.length ? null : ","}&nbsp;
        </p>
      ));
    } else return <p style={{ color: "red" }}>Not awarded</p>;
  };

  const ListItem = ({ item }) => {
    return (
      <ul className="listItem">
        <p className="row1">{item.year}</p>
        <p className="row2">
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </p>
        <div className="row3">
          <LaureateNames nameList={item.laureates} />
        </div>
      </ul>
    );
  };

  return (
    <div className="listContainer">
      <div className="listHeader">
        <p className="row1">Year</p>
        <p className="row2">Category</p>
        <p className="row3">Winners</p>
      </div>
      <div className="listBody">
        {filteredList.length === 0 && (
          <p style={{ fontSize: "2.5em", textAlign: "center" }}>
            No Results found!
          </p>
        )}
        {filteredList.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PriceList;
