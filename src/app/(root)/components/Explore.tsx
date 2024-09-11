"use client";
import React from "react";
import Image from "next/image";
import Banner from "./home-banner.webp";
const Explore: React.FC = () => {
  return (
    <>
      <section className="w-full p-10 md:p-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <h1 className=" font-normal">Explore our flexible solutions</h1>
            <h2 className="text-blue-700">Check more →</h2>
          </div>
          <div className=" flex md:flex-row md:flex-nowrap flex-wrap gap-2 overflow-hidden">
            {/* Solution cards */}
            <div className="flex flex-col items-start gap-0 md:gap-2 w-3/4 md:w-1/4">
              <Image src={Banner} alt="1" width={300} height={200} />
              <h2>Private Office</h2>
              <p>
                Settle into a fully-furnished office with access to professional
                amenities and meeting rooms—plus optional add-ons.
              </p>
              <button className="my-5 border-2 border-blue-700 p-2 text-blue-700 hover:text-white hover:bg-blue-700">
                Learn more
              </button>
            </div>
            <div className="flex flex-col items-start gap-0 md:gap-2 w-3/4 md:w-1/4">
              <Image src={Banner} alt="1" width={300} height={200} />
              <h2>Private Office</h2>
              <p>
                Settle into a fully-furnished office with access to professional
                amenities and meeting rooms—plus optional add-ons.
              </p>
              <button className="my-5 border-2 border-blue-700 p-2 text-blue-700 hover:text-white hover:bg-blue-700">
                Learn more
              </button>
            </div>
            <div className="flex flex-col items-start gap-0 md:gap-2 w-3/4 md:w-1/4">
              <Image src={Banner} alt="1" width={300} height={200} />
              <h2>Private Office</h2>
              <p>
                Settle into a fully-furnished office with access to professional
                amenities and meeting rooms—plus optional add-ons.
              </p>
              <button className="my-5 border-2 border-blue-700 p-2 text-blue-700 hover:text-white hover:bg-blue-700">
                Learn more
              </button>
            </div>
            <div className="flex flex-col items-start gap-0 md:gap-2 w-3/4 md:w-1/4">
              <Image src={Banner} alt="1" width={300} height={200} />
              <h2>Private Office</h2>
              <p>
                Settle into a fully-furnished office with access to professional
                amenities and meeting rooms—plus optional add-ons.
              </p>
              <button className="my-5 border-2 border-blue-700 p-2 text-blue-700 hover:text-white hover:bg-blue-700">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
