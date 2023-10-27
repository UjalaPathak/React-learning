import RestaurantMenuCards from "../ResturantMenuCards";

const RestaurantCategory = (props) => {
  const itemCard = props.category.card.card;

  return (
    <div>
      <h1>
        {props.category.card.card.title}(
        {props.category.card.card.itemCards.length})
      </h1>
      {itemCard &&
        itemCard.itemCards.map((items) => (
          <RestaurantMenuCards items={items} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
