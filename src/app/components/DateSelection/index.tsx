"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import "react-date-range/dist/theme/default.css";
import { FaCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import React, { use, useState } from "react";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import { Menu } from "@headlessui/react";

import { pt } from "date-fns/locale";

const initialData = [
  {
    startData: new Date(),
    endDate: undefined,
    key: "selection",
  },
];
const DateSelection = () => {
  const [date, setDate] = useState(initialData);

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">
              Selecione uma data
            </div>
          </div>

          <div className="flex items-center gap-x-3 xl:ml-6">
            <div>{format(date[0].startData, "dd/MM/yyy")}</div>
            <FaArrowRightLong className="text-accent text-[12px]" />

            {date[0].endDate ? (
              <div>{format(date[0].endDate, "dd/MM/yyy")}</div>
            ) : (
              <div>{format(date[0].startData, "dd/MM/yyy")}</div>
            )}
          </div>
        </Menu.Button>

        <Menu.Items
          className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px]
         left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden"
        >
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            locale={pt}
            ranges={date}
            rangeColors={["#ED1D24"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DateSelection;
