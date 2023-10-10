
import { useState } from "react";
import MenuFooter from "./Components/FooterForMenu/FooterForMenu";

const RestaurantMenuCards = (props) => {
 
  console.log("itemCard",props)     
  return (
    <div>
    
          <div className="menu-card">
            <div className="menu-info">
            <h3>{props?.items?.card?.info?.name}</h3>
             
              <h4>
                Rs.
                {props?.items.card.info.price / 100 ||
                props?.items.card.info.defaultPrice / 100}
              </h4>
              <p>{props?.items?.card?.info?.description}</p>
            </div>
            <div className="food-items">
            <img
              className="menu-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                props?.items?.card?.info?.imageId
              }
              alt="burger"
            />
            <button className="add-button">Add +</button>
            </div>
          </div>
    </div>
   
  );
};

export default RestaurantMenuCards;
