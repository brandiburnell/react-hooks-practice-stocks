import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("");

  // get stocks from server on initial load
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(stonks => setStocks(stonks));
  }, []);

  // add stock to portfolio
  function addToPortfolio(id) {
    const stockToAdd = stocks.find((stock) => stock.id === id);
    setPortfolio([...portfolio, stockToAdd]);
    // console.log(portfolio);
  }

  // remove stock from portfolio
  function removeFromPortfolio(id) {
    const portolioWithoutStock = portfolio.filter((stock) => stock.id !== id);
    setPortfolio([...portolioWithoutStock]);
  }

  // sort stocks alphabetically
  function sortAlphabetically() {
    const sortedArray = [...stocks].sort((a,b) => a.name.localeCompare(b.name));
    setStocks(sortedArray);
  }

  // sort stocks by price
  function sortByPrice() {
    const sortedArray = [...stocks].sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
    setStocks(sortedArray);
  }

  // filter by type
  function filterByType(filterType) {
    setFilter(filterType);
  }

  return (
    <div>
      <SearchBar 
        onAlphabeticallySelect={sortAlphabetically}
        onPriceSelect={sortByPrice}
        onTypeSelect={filterByType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filter === ""? stocks : stocks.filter((stock) => stock.type.toLowerCase() === filter.toLowerCase())} 
            handleClick={addToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio}
            handleClick={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
