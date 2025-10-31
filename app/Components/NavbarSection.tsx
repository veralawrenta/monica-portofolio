"use client";
import { useState, useEffect } from "react";

export default function NavbarSection() {

  return (
    <nav className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-2xl font-bold bg-gray-100 text-gray-700 p-1 md:bg-transparent md:text-gray-100">
          {'<'}<span className="text-4xl font-bold text-gray-700 p-1 md:bg-transparent md:text-gray-100">ML</span>{'/'+'>'}
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 -top-10 opacity-0 md:opacity-100 md:top-0 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none opacity-100" : "top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#home" className="sm:text-lg text-base font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="#aboutme" className="sm:text-lg text-base font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="sm:text-lg text-base font-semibold">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="sm:text-lg text-base font-semibold">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
