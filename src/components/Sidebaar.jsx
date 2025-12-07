import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebaar() {
  const { pathname } = useLocation();

  const navItem =
    "block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-blue-300 hover:text-gray-900";

  const active =
    "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <div className="fixed flex flex-col justify-between bg-blue-200 h-screen w-[16%] py-10 px-4 border-r border-blue-300">
      
      {/* Logo + Footer */}
      <div className="flex flex-col items-center">
        <Link to="/">
          <img src="/Logo/logork.svg" alt="img" className="h-28 mb-3" />
        </Link>

        <Link to="/" className="text-center text-gray-600 text-sm leading-tight">
          <p>Made ❤️ by</p>
          <p className="font-semibold">Ritik Sharma</p>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col space-y-3 text-lg font-medium mt-8">
        <Link
          to="/create"
          className={`${navItem} ${pathname === "/create" ? active : ""}`}
        >
          Create
        </Link>

        <Link
          to="/read"
          className={`${navItem} ${pathname === "/read" ? active : ""}`}
        >
          Read
        </Link>

        <Link
          to="/update/:id"
          className={`${navItem} ${pathname === "/update" ? active : ""}`}
        >
          Update
        </Link>

        <Link
          to="/delete"
          className={`${navItem} ${pathname === "/delete" ? active : ""}`}
        >
          Delete
        </Link>
      </div>

      {/* External Links */}
      <div className="flex flex-col space-y-2 text-sm text-center">
        <a
          href="https://ritik-portfolio-devloper.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline"
        >
          Visit Main Website
        </a>

        <a
          href="https://www.linkedin.com/in/7338-ritik-kumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Sidebaar;
