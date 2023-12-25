import React, { useRef } from "react";
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

// TODO: Make this buttons like accordion (when you click on one button, it will open and show you more buttons)

const ButtonList = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 70;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 70;
    }
  };

  return (
    <div className="flex items-center overflow-x-hidden">
      <button
        className="px-2 py-1 bg-gray-200 rounded-l focus:outline-none transition-all duration-300"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        className="flex flex-nowrap space-x-2 overflow-x-auto max-w-screen-lg transition-all duration-300"
        ref={containerRef}
      >
        {buttons.map((button) => (
          <Button key={button.id} name={button.name} />
        ))}
      </div>
      <button
        className="px-2 py-1 bg-gray-200 rounded-r focus:outline-none transition-all duration-300"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonList;
