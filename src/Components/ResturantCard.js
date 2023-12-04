import { Icon } from "semantic-ui-react";

const ResturantCard = (props) => {
  const { resturant } = props;
  console.log("resturant", resturant);
  return (
    <div className="py-10 w-[300px]">
      <div className="max-w-sm ">
        <a href="#">
          <img
            className=" cursor-pointer  rounded-lg w-full h-64 object-cover "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resturant.info.cloudinaryImageId
            }
            alt="burger"
          />
        </a>
        {/*} <div className="absolute bg-gradient-to-t px-4 text-lg text-white bottom-0 right-0 left-0 font-bold uppercase  w-full h-16 bg-black opacity-50 from-transparent to-gray-900 p-6  border-none">
          <p className="text-black-600/100">
            {resturant?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {resturant?.info?.aggregatedDiscountInfoV3?.subHeader}
          </p>
          </div>*/}
      </div>
      <div className="px-6">
        <div className="text-black font-bold text-lg">
          {resturant.info.name}
        </div>
        <div className="text-black font-semibold grid grid-flow-col justify-start  items-center">
          <Icon name="star" color="yellow" />
          <span>{resturant.info.avgRating}</span>
        </div>
        <div>
          <span className="text-white font-bold p-1 bg-green-500 rounded my-2">
            {resturant.info.sla.slaString}
          </span>
        </div>
        <div className="text-gray-500 overflow-ellipsis max-w-[calc(100% - 1.25rem)] ">
          <h4 className="  whitespace-nowrap truncate ...">
            {resturant.info.cuisines.join(",")}
          </h4>

          <h4 className="mt-[-1rem] ">{resturant.info.areaName}</h4>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
