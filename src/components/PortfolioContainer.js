import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleClick }) {
  const stocksInPortfolio = portfolio.map((stock) => {
    return (
      <Stock
        name={stock.name}
        price={stock.price}
        id={stock.id}
        ticker={stock.ticker}
        type={stock.type}
        key={stock.id}
        onStockClick={handleClick}
      />
    ); 
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocksInPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
