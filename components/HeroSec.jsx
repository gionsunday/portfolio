'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSec = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className='text-white mb-4 sm:text-3xl text-4xl lg:6xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-800 to-sky-600 ">Hello, I'm {' '}</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Gion',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Fullstack Web Developer',
                1000,
                'Web Designer',
                1000,
                'Database Manager',
                1000,
                'Software Developer',
                1000,
                'Graphics Designer',
                1000,
                'QA Engineer',
                1000

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p className='text-[#ADB7BE] mb-6 sm:text-lg text-lg lg:text-xl'>You can start editing the page by modifying app/page.js.
            The page auto-updates as you edit the file.
            This project uses next/font to automatically optimize
            and load Inter, a custom Google Font.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-orange-800 to-sky-600 hover:bg-slate-300 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-orange-800 to-sky-600 hover:bg-slate-800 text-white mt-4 ">
              <span className="block bg-[#121212] hover:bg-slate-800 px-5 py-3 rounded-full ">Download CV </span></button>
          </div>
        </div>
        <div className="col-span-5 mt-4 lg:mt-0 place-self-center">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px]
          lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/herosec.png"
              alt="HeroImag"
              width={320}
              height={320}
              className="absolute transform -translate-x-1/2
            -translate-y-1/2 top-1/2 left-1/2"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSec