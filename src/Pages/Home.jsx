import React, { useState } from "react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[30vw] flex flex-col justify-center items-start p-5">
        <span className="text-5xl font-bold">Providing Quality HealthCare</span>
        <span className="py-4 text-2xl">
          Book an appointment with our experienced doctors and receive the best
          medical care
        </span>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          className="bg-[var(--Primary)] text-white text-2xl w-[85%] font-bold p-5 rounded-2xl cursor-pointer"
        >
          Book an appointment
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          className="border-2 border-[var(--Primary)]-500/100 text-[var(--Primary)] text-2xl w-[85%] font-bold p-5 rounded-2xl cursor-pointer my-2"
        >
          Learn More
        </motion.button>
      </div>
      <img className="max-w-2xl" src="/doctor.png" alt="" />
    </div>
  );
}
