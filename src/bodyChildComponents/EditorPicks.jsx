import React from "react";

const photos = [
  "https://picsum.photos/id/27/1400/700",
  "https://picsum.photos/id/28/1400/700",
  "https://picsum.photos/id/29/1400/700",
  "https://picsum.photos/id/30/1400/700",
];

function EditorPicks() {
  return (
    <div>
      <div className="w-[72%] m-auto ">
        <h2>EDITORS'S PICK</h2>
        <p>Problems trying to resolve the conflict between</p>
        <div className="flex gap-8">
          <div
            className="w-full aspect-square bg-center bg-cover"
            style={{
              backgroundImage: `url(${photos[0]})`,
            }}
          ></div>
          <div className="w-full flex gap-8">
            <div
              className="w-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${photos[1]})`,
              }}
            ></div>
            <div className="flex flex-col gap-4 w-full">
              <div
                className="grow bg-center bg-cover"
                style={{
                  backgroundImage: `url(${photos[2]})`,
                }}
              ></div>
              <div
                className="grow bg-center bg-cover"
                style={{
                  backgroundImage: `url(${photos[3]})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPicks;
