import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredlistofRestaurants, setFilteredlistofRestaurants] = useState(
    []
  );
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.516357&lng=73.815334&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //optional chaining
    const typeofreturant =
      "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle";
    const data1 = json?.data?.cards?.map((item) => {
      if (
        item?.card?.card?.gridElements?.infoWithStyle["@type"] ===
        typeofreturant
      ) {
        return item.card.card.gridElements.infoWithStyle;
      }
    });
    const data2 = data1.filter((value) => value !== undefined);
    setListofRestaurants(data2[0]?.restaurants);
    setFilteredlistofRestaurants(data2[0]?.restaurants);
  };
  return (
    <div className="body-container">
      <div className="search-input">
        <input
          type="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterData = filteredlistofRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            });
            setListofRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants &&
          listofRestaurants.map((resturant) => (
            <Link to={"/resturant/" + resturant.info.id}>
              <ResturantCard Key={resturant.info.id} resturant={resturant} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Body;
