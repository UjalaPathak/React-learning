const Shimmer = () => {
  console.log("hii");
  return (
    <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 lg:gap-4 justify-items-center">
      <div className="py-10 h-64 w-[300px]   rounded-lg  bg-red-100">
        <div className="max-w-sm relative  ">
          <a href="#"></a>
        </div>
      </div>
      <div className="px-6">
        <div className="text-black font-bold text-2xl"></div>
        <div className="text-black font-semibold grid grid-flow-col justify-start  items-center">
          <div
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#5ced73",
              borderRadius: "50%",
            }}
            className=" flex items-center justify-center "
          ></div>

          <span></span>
        </div>
        <div></div>
        <div className="text-gray-500 overflow-ellipsis max-w-[calc(100% - 1.25rem)] ">
          <h4 className="  whitespace-nowrap truncate ..."></h4>

          <h4 className=""></h4>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
