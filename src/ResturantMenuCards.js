import { useState } from "react";
import MenuFooter from "./Components/FooterForMenu/FooterForMenu";

const RestaurantMenuCards = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props.items.card.info;

  return (
    <div className="menu-card">
      <div className="menu-info">
        <h3>{name}</h3>
        <h4>
          Rs
          {price / 100 || defaultPrice / 100}
        </h4>
        <p>{description}</p>
      </div>
      <div className="food-items">
        <img
          className="menu-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt="burger"
        />
        <button className="add-button">Add +</button>
      </div>
    </div>
  );
};

export default RestaurantMenuCards;
