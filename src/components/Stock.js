import React from "react";

function Stock({ name, price, id, type, ticker, onStockClick }) {
  // pass id up to parent component
  function onClick() {
    onStockClick(id);
  }

  return (
    <div>
      <div className="card" onClick={onClick} id={id}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
