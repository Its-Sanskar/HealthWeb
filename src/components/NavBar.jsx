import React, { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { IoReorderThree } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md p-5">
      <div className="flex justify-between items-center text-lg text-[var(--Text)]">
       
        <div className="text-3xl font-bold">HealthCare++</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex w-[30vw] justify-between items-center font-medium px-1.5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Services</li>
        </ul>

        
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block rounded-2xl font-medium p-0.5 px-5 cursor-pointer"
          style={{ background: "var(--Primary)", color: "white" }}
        >
          LogIn
        </motion.span>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CgClose /> : <IoReorderThree />}
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-3 mt-4 md:hidden text-[var(--Text)]"
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Services</li>
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl font-medium p-2 px-5 cursor-pointer w-fit"
              style={{ background: "var(--Primary)", color: "white" }}
            >
              LogIn
            </motion.span>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
