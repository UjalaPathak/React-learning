import { useState } from "react";

const RestaurantMenuCards = (props) => {
  console.log("props", props);
  console.log(
    "props",
    props?.menuCardInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards
  );
  const recommended =
    props?.menuCardInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  // const [recommended,setRecommended]= useState([])
  //const {name,avgRating,cuisines,locality,costForTwoMessage}=props?.menuCardInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

  return (
    <div>
      <h1>
        {
          props?.menuCardInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.title
        }
      </h1>
      {
        recommended &&
        recommended.map((item) => (
          <div className="menu-card">
            <div className="menu-info">
              <h3>{item.card.info.name}</h3>
              <h4>
                Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h4>
              <p>{item.card.info.description}</p>
            </div>
            <div className="food-items">
            <img
              className="menu-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              alt="burger"
            />
            <button className="add-button">Add +</button>
            </div>
          </div>
         ))
      }
     
    </div>
  );
};

export default RestaurantMenuCards;
