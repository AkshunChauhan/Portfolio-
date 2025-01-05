"use client";

import { useRef, useEffect } from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Typed from 'typed.js';
// import CustomCursor from './ui/CustomCursor';
import Ak from './images/about/akshunchauhan.jpg';

const Hero = () => {
  const typedRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Next.js Developer",
        "Full Stack Engineer",
        "UI/UX Enthusiast",
        "Web Architect"
      ],
      typeSpeed: 20,
      backSpeed: 40,
      smartBackspace: true,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}

      <div ref={containerRef} className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center">
            {/* Image container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-md opacity-75" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src={Ak}
                  alt="Akshun Chauhan"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            <h1 className="heading-highlight text-center text-4xl md:text-5xl lg:text-6xl mb-8 transition-colors duration-300">
              <span className="hover:text-orange-500 transition-colors">Well,</span>{' '}
              <span className="hover:text-blue-500 transition-colors">Hello</span>{' '}
              <span className="hover:text-green-500 transition-colors">There</span>{' '}
            </h1>
            
            <h1 className="heading-highlight text-center text-4xl md:text-5xl lg:text-6xl mb-8 transition-colors duration-300">
              <span className="hover:text-red-500 transition-colors">My</span>{' '}
              <span className="hover:text-pink-500 transition-colors">name</span>{' '}
              <span className="hover:text-yellow-500 transition-colors">is</span>{' '}
              <span className="hover:text-blue-300 transition-colors">Akshun Chauhan</span>
            </h1>

            <div className="text-center text-2xl md:text-3xl lg:text-4xl mb-6">
              I&apos;m a <span ref={typedRef} className="text-blue-500"></span>
            </div>

            <p className="tracking-widest text-xs text-center text-blue-100 max-w-80 hover:text-blue-400 transition-colors">
              I go by AK as well
            </p>

            <a href="#about" className="mt-8">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;