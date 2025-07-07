import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="text-gray-800 px-4">
      <div className="text-2xl text-center pt-8 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            ABOUT <span className="text-gray-700 font-medium">TRENDORA</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Trendora"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to <strong className="text-gray-800">Trendora</strong>,
            where fashion meets innovation. Born from a desire to redefine
            modern online shopping, Trendora is more than just a store — it’s a
            destination for trendsetters.
          </p>
          <p>
            We handpick stylish, high-quality products across fashion,
            lifestyle, and essentials — all at your fingertips. Whether you're
            seeking a wardrobe refresh or unique everyday items, Trendora
            delivers the best from trusted global brands.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To empower our customers to express themselves through style and
            convenience — with trend-forward, reliable, and accessible shopping.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            WHY <span className="text-gray-700 font-medium">CHOOSE US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Curated Collections</b>
          <p className="text-gray-600">
            Our team carefully selects each product to stay ahead of trends,
            ensuring style and substance in every item.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Seamless Experience</b>
          <p className="text-gray-600">
            Enjoy a smooth and secure shopping journey — from browsing to
            doorstep delivery — with just a few clicks.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Support That Cares</b>
          <p className="text-gray-600">
            Our responsive customer service is always here to help — because
            your satisfaction is at the heart of Trendora.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe to Trendora & get 20% off your first order!
        </p>
        <p className="text-gray-400 mt-3">
          Stay ahead of trends, get exclusive deals & discover new arrivals.
        </p>
        <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input
            className="w-full sm:flex-1 outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
