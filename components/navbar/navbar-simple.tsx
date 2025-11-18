import Link from "next/link";
import React from "react";
import Logo from "../logo";

const NavbarSimple = () => {
  return (
    <header className="sticky top-0 z-50 font-sans backdrop-blur-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 flex items-center gap-3 p-1.5 text-2xl tracking-wide text-gray-900 dark:text-white"
          >
            <span className="sr-only">Realitize</span>
            <div className="text-brand-400">
              <Logo />
            </div>
            <span>
              <b>REAL</b>ITIZE
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSimple;
