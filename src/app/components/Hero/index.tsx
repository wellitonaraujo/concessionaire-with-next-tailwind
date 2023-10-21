"use client";

import { useSearchContext } from "@/app/context/search";
import Search from "../Search";

const Hero = () => {
  const { searchActive } = useSearchContext();

  return (
    <section className="h-screen xl:h-[90vh] bg-[#B2B7C2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">hero</div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;
