"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen text-zinc-700 flex items-center justify-center "
    >
      <div className=" p-10  w-full flex flex-col md:flex-row items-center justify-between gap-5 ">

        {/* Left: Text Content */}
        <div className=" h-full  md:w-1/2 py-20 px-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I’m <span className="text-pink-400">Sandeep Rajawat</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold  mb-4">
            I’m a{" "}
            <span className="text-cyan-300">
              <Typewriter
                words={["Web Developer", "Software Engineer", "Python Developer", "Professionl Gamer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>

          <p className=" mb-6 text-zinc-700">
            I love building beautiful, responsive websites and apps that deliver amazing user experiences.
          </p>

          <Link
            href="#contact">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact me</button>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-100 h-100 rounded-full overflow-hidden border-4 border-white/20 shadow-lg bg-white/10 backdrop-blur-md">
            <Image
              src="/me2.jpeg" 
              alt="Your Name"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
