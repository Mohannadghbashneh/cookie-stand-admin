import React from "react";

export default function Header() {
  return (
    <header className="">
       <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">           
  
    <span class=" font-semibold text-xl  tracking-tight">Cookie Stand Admin</span>

  </div>
  

  <div class="block lg:hidden">
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class=" items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto  text-xl    lg:mt-0 text-teal-200 hover:text-black mr-4">
      Home
      </a>
      <a href="about" class=" items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto text-xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">
      About
      </a>
      <a href="service" class=" items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto text-xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">
      Services
      </a>
      <a href="contact" class=" items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto text-xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">

      Contact Us
      </a>
    </div>
    <div>
    </div>
  </div>
</nav>
    </header>
  );
}