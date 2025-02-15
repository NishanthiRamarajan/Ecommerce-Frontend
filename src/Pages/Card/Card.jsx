import React, { useState, useEffect } from "react";
import card from "./Card.module.css";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";

const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id === product.id);

  useEffect(() => {
    item.length === 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  return (
    <div
      className={card["card"]}
    >
      <img className={card["card__img"]} src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
       <p>{product.description}</p>
      </div>
      
      <div className={card["card-price-add"]}>
        <span className={card["price"]}>Price : ${product.price}</span>
        <button
        className={card[isAdded ? "add-item-btn" : "remove-item-btn"]}

          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD" : "CANCEL"}
        </button>
      </div>
    </div>
  );
};

export default Card;
