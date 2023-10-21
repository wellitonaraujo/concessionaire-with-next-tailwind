import LocatonSelection from "../LocatonSelection";
import HoursSelection from "../HoursSelection";
import DateSelection from "../DateSelection";

import React from "react";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocatonSelection />

          <DateSelection />

          <HoursSelection />

          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
