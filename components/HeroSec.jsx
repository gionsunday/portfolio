"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSec = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center md:pl-10 text-center sm:text-left ">
          <h1 className="text-white mb-4 sm:text-3xl text-4xl lg:6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-800 to-sky-600 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "John Sunday",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Fullstack Web Developer",
                1000,
                "A Web Designer",
                1000,
                "A Database Manager",
                1000,
                "A Software Developer",
                1000,
                "A Graphics Designer",
                1000,
                "A Q.A Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 px-1 sm:text-lg text-lg lg:text-xl">
            Unleash the power of cutting-edge technology, seamless design, and
            user-friendly interfaces. Elevate your online presence with a
            developer who not only understands the language of the web but also
            speaks the language of your brand.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-orange-800 to-sky-600 hover:bg-slate-300 text-white">
              <Link href="mailto:richardadaji@gmail.com">Hire Me</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-orange-800 to-sky-600 hover:bg-slate-800 text-white mt-4 ">
              <span className="block bg-[#121212] hover:bg-slate-800 px-5 py-3 rounded-full ">
                <a href="/John-Sunday's-CV.pdf" download>
                  Download CV{" "}
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 lg:mt-0 place-self-center">
          <div
            className="rounded-full mt-4 bg-[#181818] w-[300px] h-[300px]
          lg:w-[350px] lg:h-[350px] relative"
          >
            <Image
              src="/heroimg.png"
              alt="HeroImag"
              width={280}
              height={280}
              className="absolute  rounded-full transform -translate-x-1/2
            -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
