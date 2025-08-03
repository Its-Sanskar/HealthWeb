import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center text-lg text-[var(--Text)] p-5 ">
      <div className="text-3xl font-bold">HealthCare</div>
      <div>
        <ul className="w-[30vw] flex justify-between items-center font-medium px-1.5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-2xl font-medium p-0.5 px-5 cursor-pointer "
        style={{ background: "var(--Primary)", color: "white" }}
      >
        LogIn
      </motion.span>
    </div>
  );
}
