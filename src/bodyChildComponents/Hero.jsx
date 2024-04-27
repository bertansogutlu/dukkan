import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

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
      <div className="flex flex-col gap-11 absolute bottom-[25%] left-48 text-white">
        <p className="text-base">SUMMER 2020</p>
        <h2 className="text-6xl font-bold">NEW COLLECTION</h2>
        <div>
        <p className="text-xl">We know how large objects will act,</p>
        <p className="text-xl">but things on a small scale</p>
        </div>
        <button className="text-2xl h-14 w-56 rounded-sm bg-[#2DC071]">SHOP NOW</button>
      </div>
      <SlArrowLeft    onClick={left} className="w-12 h-12 rounded-full cursor-pointer absolute text-white left-8 top-[40%]"/>
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
      <SlArrowRight onClick={right} className="w-12 h-12 rounded-full cursor-pointer absolute text-white right-8 top-[40%]"/>
      <div className="flex absolute w-40 bottom-10 left-0 right-0 m-auto gap-0.5 justify-center">
        {photos.map((item, index) => {
          return (
            <div
              onClick={() => btn(index)}
              className={index === active ? "bg-white w-16 h-2.5 cursor-pointer" : "bg-white opacity-50 w-16 h-2.5 cursor-pointer"}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
