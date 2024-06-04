import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenuCards = (props) => {
  // const { name, price, defaultPrice, description, imageId } =
  //   props.items.card.info;
  const dispatch = useDispatch();

  const handleClick = () => {
    //dispatch an action
    dispatch(addItem("pizza"));
  };
  return (
    <div className="border-b-2 border-gray-400 flex flex-col justify-between items-center">
      {props.items.itemCards.map((item, index) => (
        <div className="flex">
          <div className="w-9/12 flex flex-col">
            <span>{item?.card?.info?.name}</span>
            <span>
              Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <button
              className="p-2  mx-14 rounded-lg bg-white shadow-lg "
              onClick={handleClick}
            >
              Add +
            </button>
            <img
              className="w-full"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              alt="burger"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCards;
