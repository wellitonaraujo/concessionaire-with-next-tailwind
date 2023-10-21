"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import React, { useState } from "react";

const locations = [
  "Main Street 123, Brasil",
  "Main Street 32, Estados Unidos",
  "Park Road 333, Reino Unido",
];

const LocatonSelection = () => {
  const [location, setLocation] = useState("Selecione uma localização");

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                Selecione uma localização
              </div>
              <div>{location}</div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items>ITEM</Menu.Items>
      </div>
    </Menu>
  );
};

export default LocatonSelection;
