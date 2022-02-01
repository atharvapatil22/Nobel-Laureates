import React from "react";
import "./WinnerInfo.css";

function WinnerInfo({ data }) {
  return (
    <div className="infoContainer">
      <p style={{ fontWeight: "bold", color: "rgb(30, 30, 169)" }}>
        {data.name}
      </p>

      <div className="awards">
        {data.awards.map((award, index) => (
          <p className="award" key={index}>
            {award.year}-{award.category}
          </p>
        ))}
      </div>

      <p>{data.description}</p>
    </div>
  );
}

export default WinnerInfo;
