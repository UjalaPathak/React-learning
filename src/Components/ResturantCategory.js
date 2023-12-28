import { useState } from "react";
import RestaurantMenuCards from "../ResturantMenuCards";

const RestaurantCategory = (props) => {
  const itemCard = props.category.card.card;

  // const [show, setShowItem] = useState(false);
  const handleClick = () => {
    props.setShowIndex();
  };

  return (
    <div className="w-6/12 p-4  bg-gray-200 mx-auto my-4">
      <div
        className=" flex justify-between Class
      cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold  aria-hidden text-lg">
          {props.category.card.card.title}(
          {props.category.card.card.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <div>
        {props.ShowItems &&
          itemCard &&
          itemCard.itemCards.map((items, index) => (
            <RestaurantMenuCards key={index} items={items} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
