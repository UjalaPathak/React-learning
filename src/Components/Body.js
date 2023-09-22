import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";

const Body =()=>{

    const [listofRestaurants,setListofRestaurants]= useState([]);
    const [filteredlistofRestaurants,setFilteredlistofRestaurants] = useState([]);
    const [searchInput,setSearchInput]= useState([])

   useEffect (()=>{
    fetchData();
   },[])

   const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.516357&lng=73.815334&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
    //optional chaining

    setListofRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setFilteredlistofRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }




    return (
        <div className="body-container">
        <div className="search-input">
        <input type="search" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
        <button onClick={()=>{
            const filterData = filteredlistofRestaurants.filter((res)=>{
             return res.info.name.toLowerCase().includes(searchInput.toLowerCase())
            }
            )
            setListofRestaurants(filterData)
        }}>Search</button>
        </div>
        <div className="res-container">
        {listofRestaurants && listofRestaurants.map((resturant)=>
        <ResturantCard resturant={resturant}/>)}
        </div> 
        </div>
    )
}
export default Body;  