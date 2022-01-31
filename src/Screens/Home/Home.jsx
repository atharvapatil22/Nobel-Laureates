import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import PriceList from "../../Components/PriceList/PriceList";
import Multiselect from "multiselect-react-dropdown";

function Home() {
  const [prizesList, setPrizesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [activeFilters, setActiveFilters] = useState({ categoryFilter: null });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://api.nobelprize.org/v1/prize.json")
      .then((response) => {
        setFilteredList(response.data.prizes);
        setPrizesList(response.data.prizes);
        getCategories(response.data.prizes);
      })
      .catch((error) => console.log("ERROR OCCURED!! ", error));
  };

  const getCategories = (prizes) => {
    let categoriesList = {};

    // Get unique categories from prize list
    prizes.forEach((item) => {
      categoriesList[item.category] = true;
    });

    // Set options for category dropdown
    setCategoryOptions(
      Object.keys(categoriesList).map((category, index) => {
        return {
          name: category.charAt(0).toUpperCase() + category.slice(1),
          id: index + 1,
        };
      })
    );
  };

  const applyFilters = () => {
    const categoryFilter = selectedCategories.map(
      (item) => item.name.charAt(0).toLowerCase() + item.name.slice(1)
    );

    if (categoryFilter.length == 0) setFilteredList(prizesList);
    else
      setFilteredList(
        prizesList.filter((item) => categoryFilter.includes(item.category))
      );
  };

  return (
    <div className="container">
      <p>List of Nobel Laureates:</p>
      <div className="filters">
        <Multiselect
          className="categoryDropdown"
          showCheckbox
          options={categoryOptions}
          selectedValues={selectedCategories}
          onSelect={(selectedList) => setSelectedCategories(selectedList)}
          onRemove={(selectedList) => setSelectedCategories(selectedList)}
          displayValue="name"
          placeholder={
            selectedCategories.length === 0 ? "Select Category" : null
          }
          // customCloseIcon={"s"}
        />

        <button onClick={applyFilters}>Apply</button>
      </div>
      <PriceList filteredList={filteredList} activeFilters={activeFilters} />
    </div>
  );
}

export default Home;
