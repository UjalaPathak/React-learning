import React from "react";

const CartItems = ({ food }) => {
  console.log("here");
  console.log("foodincartitem", food);
  return (
    <div className="max-w-sm p-6 bg-white border">
      <img
        className="w-full"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          food.imageId
        }
        alt="burger"
      />
      <span>{food.name}</span>
      <hr></hr>
      <div className="overflow-auto">
        <h1>hii</h1>
        <h1>hii</h1>
        <h1>hii</h1>
        <h1>hii</h1>
      </div>
    </div>
  );
};

export default CartItems;
