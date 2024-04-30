import React, { useState } from "react";

const SlideShow = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleSlideClick = (direction: string) => {
    console.log(slidePosition);
    if (direction === "left" && slidePosition < 0) {
      setSlidePosition((prev) => prev + 300);
    } else if (direction === "rightls" && slidePosition > -1000) {
      setSlidePosition((prev) => prev - 300);
    }
  };
  return (
    <div className=" max-w-[1300px] m-auto p-4 md:p-12 mb-12 ">
      <h3 className="text-white text-center text-3xl mb-2">And More</h3>
      <div className="flex justify-center relative">
        <button
          className="border-l-2 border-l-slate-500 hover:border-l-white box-border duration-100 z-10"
          onClick={() => handleSlideClick("left")}
        >
          <p className=" px-2">{"<"}</p>
        </button>
        <div className=" h-96 w-[1300px] relative overflow-hidden ">
          <div
            className="absolute  h-full flex  duration-500 ease-in-out"
            style={{
              transform: `translate(${slidePosition}px)`,
            }}
          >
            <div className="overflow-scroll w-[300px] md:w-[500px] flex-shrink-0 h-full">
              <img
                src="/assets/restaurant.png"
                alt="restaurant image"
                className="object-cover z-0 "
              />
            </div>
            <div className="overflow-scroll w-[300px] md:w-[500px] flex-shrink-0 h-full">
              <img
                src="/assets/bestbuilders.png"
                alt="restaurant image"
                className="object-cover z-0 "
              />
            </div>
            <img
              src="/assets/pathfinderscreenshot.png"
              alt="restaurant image"
              className="object-cover z-0 w-[300px] md:w-[500px] h-full"
            />
          </div>
        </div>
        <button
          className="border-r-2 hover:border-r-white  border-r-slate-500 box-border duration-100 z-10"
          onClick={() => handleSlideClick("right")}
        >
          <p className=" px-2">{">"}</p>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
