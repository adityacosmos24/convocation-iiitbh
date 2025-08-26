// src/components/HeroSection.tsx
import React, { useEffect, useState } from "react";
import { Mic } from "lucide-react";
import bgiiitbh from "../assets/bgiiitbh2.png";

const HeroSection: React.FC = () => {
  const targetDate = new Date("2025-08-26T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <section
        className="relative w-full h-screen flex items-center justify-center bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgiiitbh})`,
          backgroundSize: "100% auto", // fills width, less zoom than cover
        }}
      >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <Mic className="mx-auto mb-4 h-10 w-10 text-pink-500" />

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          12<sup>th</sup> CONVOCATION
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl italic">
          26<sup>th</sup> August, 2025, 09:00 am onwards
        </p>

        <a
          href="#"
          className="mt-4 block text-blue-400 hover:underline text-sm sm:text-base"
        >
          Click here to watch the Live Stream of the Convocation Event
        </a>

        <div className="mt-8 grid grid-cols-2 sm:flex sm:justify-center gap-4">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="bg-pink-500 text-white rounded-lg px-4 py-3 sm:px-6 sm:py-4 text-center shadow-lg w-full sm:w-auto"
            >
              <p className="text-2xl sm:text-3xl font-bold">{value}</p>
              <p className="uppercase text-xs sm:text-sm mt-1">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
