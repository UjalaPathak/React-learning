import { Icon } from "semantic-ui-react";

const ResturantCard = (props) => {
  const { resturant } = props;
  return (
    <div className="py-10 w-[300px] transition-transform transform-gpu hover:scale-90">
      <div className="max-w-sm relative ">
        <a href="#">
          <img
            className="  cursor-pointer  rounded-lg w-full h-64 object-cover "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resturant.info.cloudinaryImageId
            }
            alt="burger"
          />
        </a>
        {/*
        <div className=" absolute rounded-b-lg bg-gradient-to-t ,inset-0 right-0 left-0 uppercase  w-full h-16 bg-black opacity-50 from-transparent to-gray-900 p-6  border-none blur-sm"></div>
        <p className="  text-white text-xl font-extrabold">
          {resturant?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {resturant?.info?.aggregatedDiscountInfoV3?.subHeader}
        </p>
     
       */}
      </div>
      <div className="px-6">
        <div className="text-black font-bold text-2xl">
          {resturant.info.name}
        </div>
        <div className="text-black font-semibold grid grid-flow-col justify-start  items-center">
          <div
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#5ced73",
              borderRadius: "50%",
            }}
            className=" flex items-center justify-center "
          >
            <Icon
              name="star"
              color="#FFFFFF"
              style={{
                marginTop: "-7px",
                marginRight: "0.4px",
                color: "white",
              }}
            />
          </div>

          <span>{resturant.info.avgRating}</span>
        </div>
        <div>{resturant.info.sla.slaString}</div>
        <div className="text-gray-500 overflow-ellipsis max-w-[calc(100% - 1.25rem)] ">
          <h4 className="  whitespace-nowrap truncate ...">
            {resturant.info.cuisines.join(",")}
          </h4>

          <h4 className="">{resturant.info.areaName}</h4>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
