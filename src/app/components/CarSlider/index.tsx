"use client";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { fadeIn } from "../../../../variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import "swiper/css";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 79,
    stars: 2.8,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearShift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Flex",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Seda",
    name: "Toyota Corolla",
    price: 90,
    stars: 4.8,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearShift.svg",
        text: "Automático",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Flex",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV ",
    name: "Honda CR-V",
    price: 120,
    stars: 4.6,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearShift.svg",
        text: "Automático",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Flex",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Conversivel",
    name: "Mazda MX-5",
    price: 300,
    stars: 5,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearShift.svg",
        text: "Automático",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 lugares",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Flex",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 15 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-00">
                <Image src={car.image} width={385} height={284} alt="" />

                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      R$ {car.price}/dia
                    </h3>
                  </div>
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center mb-2"
                      >
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">Detalhes</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
