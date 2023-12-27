import React from "react";
import Button from "./Button";

const buttons = [
  { id: 1, name: "All" },
  { id: 2, name: "Music" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Gaming" },
  { id: 5, name: "Movies" },
  { id: 6, name: "News" },
  { id: 7, name: "Live" },
  { id: 8, name: "Fashion" },
  { id: 9, name: "Learning" },
  { id: 10, name: "Spotlight" },
  { id: 11, name: "360° Video" },
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {buttons.map((button) => (
        <Button key={button.id} name={button.name} />
      ))}
    </div>
  );
};

export default ButtonList;
