import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between md:px-20 px-4 items-center py-4 bg-primary">
        <div className="cursor-pointer">
          <img src="/static/images/logo.png" width="200px" />
        </div>

        <ul className="hidden md:flex space-x-8 items-center">
          <li>About</li>
          <li>Services</li>
          <li className="bg-secondary text-white px-4 py-1 rounded-lg">
            Signup / Login
          </li>
        </ul>

        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
