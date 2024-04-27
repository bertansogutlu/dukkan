import React, { useState } from "react";

const photos = [
  "https://picsum.photos/id/21/1400/700",
  "https://picsum.photos/id/26/1400/700"
];

function Hero() {
  const [active, setActive] = useState(0);

  const left = () => {
    setActive((active + photos.length - 1) % photos.length);
  };

  const right = () => {
    setActive((active + 1) % photos.length);
  };

  const btn = (index) => {
    setActive(index);
  };

  return (
    <div className="relative">
      <div
        onClick={left}
        className="w-10 h-10 rounded-full cursor-pointer absolute bg-white left-10 top-[45%]"
      />
      <div className="flex">
        {photos.map((item, index) => {
          return (
            <img
              className={index === active ? "w-full aspect-[2]" : "hidden"}
              src={item}
              key={index}
              alt=""
            />
          );
        })}
      </div>
      <div
        onClick={right}
        className="w-10 h-10 rounded-full cursor-pointer absolute bg-white right-10 top-[45%]"
      />
      <div className="flex absolute bottom-10 left-[45%] gap-1">
        {photos.map((item, index) => {
          return (
            <div
              onClick={() => btn(index)}
              className="bg-white w-16 h-2.5 cursor-pointer"
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
