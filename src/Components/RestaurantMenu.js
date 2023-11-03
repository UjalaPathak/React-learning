import { useEffect, useState } from "react";
import RestaurantMenuCards from "../ResturantMenuCards";
import RestaurantCategory from "./ResturantCategory";
import FooterForMenu from "./FooterForMenu/FooterForMenu";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom hooks
  const restInfo = useResturantMenu(resId);

  const categories =restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const restaurantLicense =
    restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
    );

  const restaurantAdress =
    restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
    );

  return (
    <div className="menu">
      <div className="name-resturant">
        <h3>{restInfo[0]?.card.card.info?.name}</h3>
        <div className="rating-card">
          <h3>{restInfo[0]?.card.card.info?.avgRating}</h3>
          <h4>{restInfo[0]?.card.card.info?.totalRatingsString}</h4>
        </div>
      </div>

      <p>{restInfo[0]?.card.card.info?.cuisines.join(",")}</p>
      <p>{restInfo[0]?.card.card.info?.locality}</p>
      <hr />
      <ul>
        <li>37 MINS</li>
        <li>{restInfo[0]?.card.card.info?.costForTwoMessage}</li>
      </ul>
      <hr />
      {categories &&
        categories.map((category, index) => (
          <RestaurantCategory key={index} category={category} />
        ))}
    </div>
  );
};

export default RestaurantMenu;
