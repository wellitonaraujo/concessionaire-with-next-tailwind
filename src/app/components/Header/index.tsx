"use client";

import { useSearchContext } from "@/app/context/search";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import SearchMobile from "../SearchMobile";
import { Link } from "react-scroll";
import Image from "next/image";

const Header = () => {
  // const { setSearchActive } = useContext(SearchContext);
  const { setSearchActive } = useSearchContext();

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      //header
      setHeader(window.screenY > 40);

      /*  if (window.screenY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      */

      // search
      setSearchActive(window.screenY > 800);

      /* if(window.screenY > 800) {
         setSearchActive(true);
        } else {
          setSearchActive(false)
        } */
    };

    // event listener
    window.addEventListener("scroll", handleScroll);

    //remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/*Logo*/}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.svg"} width={194} height={64} alt="" />
          </Link>

          {/* nav open menu*/}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav*/}
        <nav
          className={`${
            nav ? "max-h-max py-4 xl:py-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden
           font-bold xl:font-medium xl:flex-row xl:w-max
            xl:gap-x-8 xl:h-max xl:bg-transparent 
            xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Inicio
          </Link>

          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Carros
          </Link>

          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Sobre
          </Link>

          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Por que nós
          </Link>

          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Depoimentos
          </Link>

          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contato
          </Link>

          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Ver todos
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
