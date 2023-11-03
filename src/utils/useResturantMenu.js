import React, { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [menuData, SetMenuData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5601649&lng=73.8031335&restaurantId={resId}";
  const fetchData = async () => {
    try {
      const response = await fetch(url.replace("{resId}", resId));

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json(); // Await the JSON parsing
      SetMenuData(json?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return menuData;
};

export default useResturantMenu;
