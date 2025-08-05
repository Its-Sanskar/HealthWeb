import React from "react";
import { motion } from "motion/react";
import { MdMedicalServices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaFileMedicalAltSolid } from "react-icons/lia";

export default function Home() {
  const box = [
    {
      icon: MdMedicalServices,
      head: "Our Services",
      title: "Explore Our Range of Medical Services",
    },
    {
      icon: FaUserDoctor,
      head: "Find A Doctor",
      title: "Search for a doctor by speciality or name",
    },
    {
      icon: LiaFileMedicalAltSolid,
      head: "Patient Resources",
      title: "Access Patient Resources and info",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[30vw] flex flex-col justify-center items-start p-5">
          <span className="text-4xl md:text-5xl font-bold">
            Providing Quality HealthCare
          </span>
          <span className="py-4 text-xl md:text-2xl">
            Book an appointment with our experienced doctors and receive the
            best medical care
          </span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="bg-[var(--Primary)] text-white text-xl md:text-2xl w-full md:w-[85%] font-bold p-4 md:p-5 rounded-2xl cursor-pointer"
          >
            Book an appointment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="border-2 border-[var(--Primary)] text-[var(--Primary)] text-xl md:text-2xl w-full md:w-[85%] font-bold p-4 md:p-5 rounded-2xl cursor-pointer my-2"
          >
            Learn More
          </motion.button>
        </div>

        {/* Doctor Image */}
        <img
          className="w-full md:w-2/4 max-w-[600px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
          src="/doctor.png"
          alt="Doctor"
        />
      </div>

      {/* Services Cards */}
      <div className="flex flex-wrap justify-center items-stretch gap-6 w-full mt-10 md:absolute md:my-[-60px]">
        {box.map((box, i) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.5 }}
            key={i}
            className="flex flex-col  items-center bg-white w-full sm:w-[80%] md:w-[25%] rounded-2xl p-5 mx-4 shadow-md min-h-[100%]"
          >
            <box.icon color="var(--Primary)" size={70} />
            <span className="text-2xl font-bold text-center ">{box.head}</span>
            <span className="text-center text-lg mt-2">{box.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
