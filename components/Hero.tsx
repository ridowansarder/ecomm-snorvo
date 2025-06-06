"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";



const Hero = () => {

  return (
    <div className="bg-[url('/hero.jpg')] relative flex flex-col justify-center items-center  py-36 px-4 sm:px-6 md:px-10 lg:px-24 text-white bg-no-repeat bg-cover bg-center min-h-screen">
      {/* <div className="absolute inset-0 bg-black/60" /> */}
      <div className="relative z-10 flex flex-col items-center lg:items-start gap-2 w-full max-w-7xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl 2xl:text-6xl font-bold max-w-4xl text-gray-900">
          Welcome to Snorvo
        </h1>
        <p className="max-w-xl text-lg md:text-xl 2xl:text-2xl text-center lg:text-left mt-4 text-gray-700">
          Discover the best products at unbeatable prices! Explore our wide
          range of items, from electronics to fashion, and enjoy a seamless
          shopping experience.
        </p>
        <Link href={"/products"} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button className="px-7 py-3 rounded bg-green-600 hover:bg-green-700 text-white font-medium flex items-center gap-2">
            Start Shopping <ShoppingBag />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
