import RestaurantMenuCards from "../ResturantMenuCards";

const RestaurantCategory = (props) => {
  const itemCard = props.category.card.card;

  return (
    <div className="w-6/12 p-4  bg-gray-200 mx-auto my-4">
      <div className=" flex justify-between">
        <span className="font-bold text-lg">
          {props.category.card.card.title}(
          {props.category.card.card.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <div>
        {itemCard &&
          itemCard.itemCards.map((items) => (
            <RestaurantMenuCards items={items} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
