import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Cricket",
  "Live",
  "Soccer",
  "Cooking",
  "Coding",
  "Songs",
  "Gaming",
  "Movies",
  "Coding",
  "Songs",
  "Gaming",
  "Movies",
  "Songs",
  "Gaming",
  "Movies",
];

const ButtonList = () => {
  return (
    <div className="flex w-full pl-5">
      <div className="flex overflow-x-auto scrollbar-hide">
        {list.map((item, index) => {
          return <Button key={index} name={item} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
