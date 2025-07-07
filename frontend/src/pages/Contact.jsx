import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="text-gray-800 px-4">
      <div className="text-center text-2xl pt-10 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            CONTACT <span className="text-gray-700 font-medium">TRENDORA</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-12 mb-28">
        <img
          className="w-full md:max-w-[500px]"
          src={assets.contact_img}
          alt="Contact Trendora"
        />
        <div className="flex flex-col justify-center items-start gap-6 md:w-2/4 text-gray-600">
          <p className="font-semibold text-xl text-gray-700">Get In Touch</p>
          <p>
            Have a question, suggestion, or need help with an order? We're here
            to help. Reach out to us and our support team will get back to you
            within 24 hours.
          </p>

          <div>
            <p className="font-medium">Email:</p>
            <p>support@trendora.com</p>
          </div>

          <div>
            <p className="font-medium">Phone:</p>
            <p>+1 (415) 123-4567</p>
          </div>

          <div>
            <p className="font-medium">Office:</p>
            <p>123 Trendora Street, Suite 500, New York, NY, USA</p>
          </div>
        </div>
      </div>

      <div className="mb-20 px-4">
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-700">Work With Us</p>
          <p className="text-gray-500 mt-2">
            We're always looking for passionate people to join the Trendora
            team.
          </p>
        </div>

        <div className="text-center">
          <button className="border border-black px-10 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500">
            View Job Openings
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe for updates & get 20% off
        </p>
        <p className="text-gray-400 mt-3">
          Be the first to know about new arrivals, sales, and exclusive offers.
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

export default Contact;
