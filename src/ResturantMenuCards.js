const RestaurantMenuCards = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props.items.card.info;

  return (
    <div className="border-b-2 border-gray-400 flex flex-row">
      <div className="flex flex-col">
        <h3>{name}</h3>
        <h4>
          Rs
          {price / 100 || defaultPrice / 100}
        </h4>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex flex-col">
        <img
          className="w-full h-16"
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
