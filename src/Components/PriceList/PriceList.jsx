import React from "react";
import "./PriceList.css";

function PriceList({ prizes }) {
  const LaureateNames = ({ nameList }) => {
    if (nameList)
      return nameList.map((item) => (
        <p key={item.id}>
          {item.firstname}&nbsp;{item.surname + ","}&nbsp;
        </p>
      ));
    else return <p style={{ color: "red" }}>Not awarded</p>;
  };

  const ListItem = ({ item }) => {
    return (
      <ul className="listItem">
        <p className="row1">{item.year}</p>
        <p className="row2">
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </p>
        <p className="row3">
          <LaureateNames nameList={item.laureates} />
        </p>
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
        {prizes.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PriceList;
