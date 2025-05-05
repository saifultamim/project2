"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCloudSun, FaRegMoon } from "react-icons/fa";
import { WiSunset } from "react-icons/wi";

export default function Greetings({ isName }: { isName: boolean }) {
  const [greeting, setGreeting] = useState("Hello");
  const [icon, setIcon] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours < 5) {
        setGreeting("Good Night");
        setIcon(<FaRegMoon className="text-blue-500" />);
      } else if (hours < 12) {
        setGreeting("Good Morning");
        setIcon(<FaSun className="text-yellow-500" />);
      } else if (hours < 18) {
        setGreeting("Good Afternoon");
        setIcon(<FaCloudSun className="text-orange-500" />);
      } else if (hours < 21) {
        setGreeting("Good Evening");
        setIcon(<WiSunset className="text-red-500" />);
      } else {
        setGreeting("Good Night");
        setIcon(<FaRegMoon className="text-blue-500" />);
      }
    };

    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col md:flex md:flex-row items-center py-3 rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="mr-4 text-5xl">{icon}</div>
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold mb-2">
          {greeting}, {isName ? "Mehedy" : ""}
        </h3>
        <p className="text-lg md:text-xl">
          Welcome to{" "}
          <Link href="#" className="text-violet-700">
            brandName
          </Link>
        </p>
      </div>
    </div>
  );
}