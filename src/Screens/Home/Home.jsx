import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Home.css";
import PriceList from "../../Components/PriceList/PriceList";
import Multiselect from "multiselect-react-dropdown";

function Home() {
  const [prizesList, setPrizesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [fromYearFilter, setFromYearFilter] = useState("1900");
  const [toYearFilter, setToYearFilter] = useState("2022");

  const [showLoader, setShowLoader] = useState(false);

  const fromYearRef = useRef(null);
  const toYearRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setShowLoader(true);
    axios
      .get("http://api.nobelprize.org/v1/prize.json")
      .then((response) => {
        setFilteredList(response.data.prizes);
        setPrizesList(response.data.prizes);
        getCategories(response.data.prizes);
      })
      .catch((error) => console.log("ERROR OCCURED!! ", error))
      .finally(() => setShowLoader(false));
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
    // Filter by Year
    if (fromYearFilter >= toYearFilter) {
      alert("Alert! FROM year must less than TO Year");
      return;
    }

    const filteredByYear = prizesList.filter((item) => {
      if (item.year >= fromYearFilter && item.year < toYearFilter) return true;
      else return false;
    });
    setFilteredList(filteredByYear);

    //  Filter by category
    const categoryFilter = selectedCategories.map(
      (item) => item.name.charAt(0).toLowerCase() + item.name.slice(1)
    );

    if (categoryFilter.length == 0) setFilteredList(filteredByYear);
    else {
      const filteredByCategory = filteredByYear.filter((item) =>
        categoryFilter.includes(item.category)
      );
      setFilteredList(filteredByCategory);
    }
  };

  const clearFilters = () => {
    setFromYearFilter("1900");
    setToYearFilter("2022");
    setSelectedCategories([]);
    setFilteredList(prizesList);
  };

  const CategoryFilter = () => {
    return (
      <div style={{ width: "50%" }}>
        <p className="filtersTitle">Category</p>
        <Multiselect
          className="categoryDropdown"
          // showCheckbox
          options={categoryOptions}
          selectedValues={selectedCategories}
          onSelect={(selectedList) => setSelectedCategories(selectedList)}
          onRemove={(selectedList) => setSelectedCategories(selectedList)}
          displayValue="name"
          S
          placeholder={
            selectedCategories.length === 0 ? "Select Category" : null
          }
        />
      </div>
    );
  };

  const YearFilter = () => {
    let options = [];

    for (let i = 1900; i <= 2022; i++) {
      options.push(i);
    }

    return (
      <div>
        <p className="filtersTitle">Year</p>
        <div className="yearFilterContainer">
          <p
            style={{
              color: "rgb(30, 30, 169)",
              alignSelf: "center",
              fontSize: "1.5em",
            }}
          >
            From
          </p>
          <select
            ref={fromYearRef}
            className="yearFilterDropdown"
            name="from_year"
            id="from_year"
            value={fromYearFilter}
            onChange={() => setFromYearFilter(fromYearRef.current.value)}
          >
            {options.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <p
            style={{
              color: "rgb(30, 30, 169)",
              alignSelf: "center",
              fontSize: "1.5em",
            }}
          >
            To
          </p>
          <select
            ref={toYearRef}
            value={toYearFilter}
            className="yearFilterDropdown"
            name="to_year"
            id="to_year"
            onChange={() => setToYearFilter(toYearRef.current.value)}
          >
            {options.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      {/* <p className="heading">List of Nobel Laureates</p> */}

      <div className="filters">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CategoryFilter />
          <YearFilter />
        </div>
        <div className="btnContainer">
          <button className="clearBtn" onClick={clearFilters}>
            Clear All
          </button>
          <button className="applyBtn" onClick={applyFilters}>
            Apply
          </button>
        </div>
      </div>

      <PriceList filteredList={filteredList} showLoader={showLoader} />
    </div>
  );
}

export default Home;
