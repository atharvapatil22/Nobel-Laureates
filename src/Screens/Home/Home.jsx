import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import PriceList from "../../Components/PriceList/PriceList";

function Home() {
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.nobelprize.org/v1/prize.json")
      .then((response) => {
        setPrizes(response.data.prizes);
      })
      .catch((error) => console.log("ERROR OCCURED!! ", error));
  }, []);

  return (
    <div className="container">
      <div>
        <p>List of Nobel Laureates:</p>
      </div>
      <PriceList prizes={prizes} />
    </div>
  );
}

export default Home;
