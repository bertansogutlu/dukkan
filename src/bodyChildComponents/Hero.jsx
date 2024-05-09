import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const photos = [
  "https://picsum.photos/id/21/1400/700",
  "https://picsum.photos/id/26/1400/700",
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
      <SlArrowLeft
        onClick={left}
        className="w-12 h-12 rounded-full cursor-pointer absolute text-white left-8 top-0 bottom-0 m-auto"
      />
      <div className="flex">
        {photos.map((item, index) => {
          return (
            <div
              className={index === active ? "w-full bg-center bg-cover aspect-[2]" : "hidden"}
              key={index}
              style={{
                backgroundImage: `url(${item})`,
              }}
            >
              <div className="flex flex-col justify-end gap-11 w-[72%] h-[75%] m-auto text-white">
                <p className="text-base">SUMMER 2020</p>
                <h2 className="text-6xl font-bold">NEW COLLECTION</h2>
                <div>
                  <p className="text-xl">We know how large objects will act,</p>
                  <p className="text-xl">but things on a small scale</p>
                </div>
                <button className="text-2xl h-14 w-56 rounded-sm bg-[#2DC071]">
                  SHOP NOW
                </button>
              </div>
              <div className="flex absolute w-40 bottom-12 left-0 right-0 m-auto gap-0.5 justify-center">
                {photos.map((item, index) => {
                  return (
                    <div
                      onClick={() => btn(index)}
                      key={index}
                      className={
                        index === active
                          ? "bg-white w-16 h-2.5 cursor-pointer"
                          : "bg-white opacity-50 w-16 h-2.5 cursor-pointer"
                      }
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <SlArrowRight
        onClick={right}
        className="w-12 h-12 rounded-full cursor-pointer absolute text-white right-8 top-0 bottom-0 m-auto"
      />
    </div>
  );
}

export default Hero;
