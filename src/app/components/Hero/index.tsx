"use client";

import { useSearchContext } from "@/app/context/search";
import Search from "../Search";
import Image from "next/image";

const Hero = () => {
  const { searchActive } = useSearchContext();

  return (
    <section className="h-screen xl:h-[90vh] bg-[#B2B7C2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h1">
              Veja o que há de melhor{" "}
              <span className="text-accent">Ofertas </span>
            </h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Encontre o carro ideal para qualquer aventura com nossa ampla
              variedade de aluguel de carros acessíveis e confiáveis
            </p>
            <div className="flex gap-x-3 justify-center xl:justify-start">
              <button
                style={{ background: "#000", padding: 8, borderRadius: 5 }}
              >
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              <button
                style={{ background: "#000", padding: 8, borderRadius: 5 }}
              >
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
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
