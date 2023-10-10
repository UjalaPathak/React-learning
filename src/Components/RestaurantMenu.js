import { useEffect, useState } from "react";
import RestaurantMenuCards from "../ResturantMenuCards";
import RestaurantCategory from "./ResturantCategory";
import FooterForMenu from "./FooterForMenu/FooterForMenu";


const RestaurantMenu = () => {

    const [menuData, SetMenuData] = useState("")
    const [resturantInfo,setResturantInfo]= useState("")


    useEffect(() => {
        fetchData()
    }, [])

    // const fetchData = async()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.516357&lng=73.815334&restaurantId=49689&catalog_qa=undefined&submitAction=ENTER")
    //     const json = data.json()
    //     console.log("json",json)

    // }
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5601649&lng=73.8031335&restaurantId=4868&catalog_qa=undefined&submitAction=ENTER"
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json(); // Await the JSON parsing
            SetMenuData(json?.data?.cards)
            setResturantInfo(json?.data)

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

   console.log("menuData",typeof(menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards))

    const categories =
    menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const restaurantLicense=
    menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
    );
    console.log("restaurantLicense",restaurantLicense)

    const restaurantAdress =
    menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
    );
    console.log("restaurantAdress",restaurantAdress)

    
     

   


    return (
        <div className="menu">
            <div className="name-resturant">
                  <h3>{menuData[0]?.card.card.info?.name}</h3>
                  <div className="rating-card">
                          <h3>{menuData[0]?.card.card.info?.avgRating}</h3>
                         <h4>{menuData[0]?.card.card.info?.totalRatingsString}</h4> 
                  </div>
            </div>
                
            <p>{menuData[0]?.card.card.info?.cuisines.join(",")}</p>
            <p>{menuData[0]?.card.card.info?.locality}</p>
            <hr />
            <ul>
            <li>37 MINS</li>
            <li>{menuData[0]?.card.card.info?.costForTwoMessage}</li>
            </ul>
             <hr />
            { categories && categories.map((category, index) => (
                <RestaurantCategory key={index}  category={category}/>
                ))}

                                 
           
                
        </div>
    )
}


export default RestaurantMenu;