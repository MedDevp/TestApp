import React, { useState } from "react";
import { navlinks, Demos } from "./../constant/data.js";

const Navbar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className="relative">
        <ul className="flex justify-around items-center space-x-9">
          {navlinks.map((value, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {value.link}
              {/* {value.icon} */}

              {index === 0 && (
                <div className="absolute top-6">
                  <ul className={hoverIndex === 0 ? " shadow-md block" : "hidden"}>
                    {Demos.map((demo, demoIndex) => (
                      <li key={demoIndex} className="block hover:text-white hover:bg-blue-600 py-2 px-12">{demo.opt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
