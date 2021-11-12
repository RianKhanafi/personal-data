import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-20">
      <div className="flex bg-blue-500 py-4 xs:py-4 md:py-5 lg:py-8 xl:py-8">
        <div className="container mx-auto xs:pl-4">
          <Link to="/">
            <h1 className="text-white text-sm xs:text-sm xl:text-xl md:text-md lg:px-2 font-bold tracking-wider">
              Personal Data
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
