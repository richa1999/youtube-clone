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
  "Vlogs",
  "Podcasts",
  "Reviews",
  "Tech",
  "Travel",
  "Comedy",
  "DIY",
];

const ButtonList = () => {
  return (
    <div className="w-full bg-white px-4 py-2 shadow-sm">
      <div className="flex overflow-x-auto gap-3 no-scrollbar">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
