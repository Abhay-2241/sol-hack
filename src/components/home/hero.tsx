
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";


const Hero = () => {

  

  return (
    <section className="flex items-center justify-center h-screen bg bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#404040,#FFFFFF_100%)] pb-20 pt-8 md:overflow-x-clip md:pb-10 md:pt-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-5">
          <div className="text-sm inline-flex border border-[#222]/10 dark:border-[#fff]/10 px-3 py-1 rounded-lg tracking-tight shadow-inner dark:shadow-white/70">
            Version 0.1 is here
          </div>
        </div>
        <div className="max-w-[600px] lg:max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-black tracking-tighter bg-gradient-to-b from-black to-black/70 dark:bg-gradient-to-b dark:from-white dark:to-white/70 text-transparent bg-clip-text text-center">
            BlockStock : Stock prediction app for Crypto.
          </h1>

          <p className="md:text-lg tracking-tighter text-black/70 dark:text-white/70 text-center mt-5 font-medium">
          Predict future stock prices and win if your estimate is closest.
          </p>
        </div>
        <div className="mt-10 flex justify-center ">
          <a href="https://stock-prediction-solana.vercel.app/">
            <button className="rounded-md font-semibold items-center text-white bg-black px-4 py-2">Get Started</button>
            
          </a>
        </div>
    
      </div>
    </section>
  );
};

export default Hero;