import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {

  const stocksToRender = stocks.map((stock) => {

    return (
      <Stock 
        name={stock.name}
        ticker={stock.ticker}
        type={stock.type}
        price={stock.price}
        id={stock.id}
        key={stock.id}
        onStockClick={handleClick}
      />
    );
  });

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToRender}
    </div>
  );
}

export default StockContainer;
