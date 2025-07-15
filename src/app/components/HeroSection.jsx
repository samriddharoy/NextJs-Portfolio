"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6">
        {/* Text Section */}
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-6xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Samriddha",
                1000,
                "a Web Developer",
                1000,
                "a React Developer",
                1000,
                "a MERN Stack Developer",
                1000,
                "a UI/UX Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-3xl lg:text-4xl text-white"
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl max-w-xl">
            A passionate developer focused on building efficient and elegant web applications using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:opacity-80 text-white text-center"
            >
              Hire Me
            </Link>
            <Link
              href="/Samriddha-CV.pdf"
              download
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:opacity-80 text-white text-center"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-gray-900">
                Download CV
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 flex justify-center">
          <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[360px] lg:h-[360px] relative">
            <Image
              src="/image/heropic.jpg"
              alt="Samriddha Hero Image"
              width={280}
              height={280}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
