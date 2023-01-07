import React from "react";
import { useContext } from "react";

import { ThemeContext } from '../contexts/theme'


export default function Header() {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  console.log(useContext(ThemeContext));


  return (
    <header className="">
      <nav class="flex items-center justify-between flex-wrap dark:bg-red-600 bg-gray-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <span class=" font-semibold text-xl dark:text-blue-300 tracking-tight">Cookie Stand Admin</span>

        </div>


        <div class="block lg:hidden">
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'">
            <a href="/" class="dark:text-blue-300 items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto  text-xl    lg:mt-0 text-teal-200 hover:text-black mr-4 dark:hover:text-black mr-4">
              Home
            </a>
            <a href="about" class=" items-center dark:text-blue-300 justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto text-xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 dark:hover:text-black mr-4 hover:text-black mr-4">
              About
            </a>
            <a href="contact" class=" items-center dark:text-blue-300 justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto text-xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black dark:hover:text-black mr-4 mr-4">
              Contact Us
            </a>
            <button
              type="button"
              className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded"
              onClick={toggleThemeHandler}
            >Toggel Theme</button>
          </div>

        </div>
      </nav>
    </header>
  );
}