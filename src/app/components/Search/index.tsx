"use client";
import { useSearchContext } from "@/app/context/search";
import LocatonSelection from "../LocatonSelection";

const Search = () => {
  //const { searchActive } = useContext(SearchContext);
  const { searchActive } = useSearchContext();

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg `}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0 ">
        <LocatonSelection />
      </div>
    </div>
  );
};

export default Search;
