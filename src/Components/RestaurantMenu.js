import { useEffect, useState } from "react";
import RestaurantCategory from "./ResturantCategory";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import { FaStar } from "react-icons/fa";
const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom hooks
  const restInfo = useResturantMenu(resId);

  console.log("restInfo", restInfo);

  // const categories =
  //   restInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  const categories = restInfo[4]?.groupedCard?.cardGroupMap?.REGULAR.card;

  const categoriesTitle =
    restInfo[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.title;

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

  const [showIndex, setShowIndex] = useState(-1);

  return (
    <div className="m-auto">
      <div className="w-6/12  mx-auto">
        <div className="inline-block">
          <span className="font-semibold text-xl">
            {restInfo[0]?.card.card.info?.name}
          </span>
          <p className="mb-1 text-xs text-gray-600/75">
            {restInfo[0]?.card.card.info?.cuisines.join(", ")}
          </p>
          <p className=" text-xs text-gray-600/75">
            {restInfo[0]?.card.card.info?.locality}
          </p>
        </div>

        <div className="border border-solid border-gray-300 shadow-md rounded-md flex flex-col text-center p-2 max-w-max float-right">
          <div>
            <span className="inline-block mr-2">
              <FaStar style={{ color: "green" }} />
            </span>
            <span className="font-semibold">
              {restInfo[0]?.card.card.info?.avgRating}
            </span>
            <hr />
            <span className="font-semibold">
              {restInfo[0]?.card.card.info?.totalRatingsString}
            </span>
          </div>
        </div>
      </div>
      <div className="w-6/12 mx-auto">
        <div className="border-dashed border-[1px] border-gray-400"></div>
        <ul className="flex ">
          <li className="m-6">37 MINS</li>
        </ul>
      </div>
      <hr />
      {categories &&
        categories.map((category, index) => (
          //controlled componenet ->Parent is controlling
          <RestaurantCategory
            key={category.card.info.id}
            category={category}
            ShowItems={index == showIndex ? true : false}
            //showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
