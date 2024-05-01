import React from "react";

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
              backgroundImage:
                "url(" +
                "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                ")",
            }}
          ></div>
          <div className="w-full flex gap-8">
            <div
              className="w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                  ")",
              }}
            ></div>
            <div className="flex flex-col gap-4 w-full">
              <div
                className="grow bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                    ")",
                }}
              ></div>
              <div
                className="grow bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                    ")",
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
