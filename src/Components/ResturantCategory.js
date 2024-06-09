import { useState } from "react";
import RestaurantMenuCards from "../ResturantMenuCards";

const RestaurantCategory = (props) => {
  if (!props.category.card.card.title) {
    return null;
  }
  console.log("props", props);
  const itemCard = props.category.card.info;

  // const [show, setShowItem] = useState(false);
  const handleClick = () => {
    console.log("click");
    props.setShowIndex((prevShowItems) => !prevShowItems);
  };

  console.log("props.item", props.showItems);

  return (
    <div className="w-6/12 p-4  bg-gray-200 mx-auto my-4">
      <div
        className=" flex justify-between Class
      cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold  aria-hidden text-lg">
          {props.category.card.card.title}
        </span>
        <span>🔽</span>
      </div>
      <div>
        {props.showItems &&
          itemCard &&
          itemCard.itemCards.map((items, index) => (
            <RestaurantMenuCards key={index} items={items} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
