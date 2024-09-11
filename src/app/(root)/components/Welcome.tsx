import React from "react";
import Image from "next/image";
import HomeBanner from "./home-banner.webp";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"


const Welcome: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* BG image */}
      <Image src={HomeBanner} alt="Logo" fill className=" object-cover" />
      {/* Selection div */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 gap-5">
        <div className="flex flex-col bg-white gap-3 p-8 mx-5">
          <h1>For all the ways you work, we’re here</h1>
          <p>
            From turnkey offices to coworking, meeting rooms, and technology,
            explore workspace solutions made for teams of all sizes.
          </p>
          <div className=" flex flex-col md:flex-row gap-3 justify-between items-center ">
            {/* select1 */}
            <Select>
              <SelectTrigger className="p-7">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose Location</SelectLabel>
                  <SelectItem value="apple">Kolkata</SelectItem>
                  <SelectItem value="banana">Delhi</SelectItem>
                  <SelectItem value="blueberry">Mumbai</SelectItem>
                  <SelectItem value="grapes">Chennai</SelectItem>
                  <SelectItem value="pineapple">Hyderabad</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* select2 */}
            <Select>
              <SelectTrigger className="p-7">
                <SelectValue placeholder="Space type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Office Space</SelectItem>
                  <SelectItem value="banana">Buildings/Appartments</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <button className="px-10 py-3 bg-blue-700 hover:bg-transparent text-white hover:text-black hover:ring-2 hover:ring-blue-700">Start</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
