
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./fayz.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={image}
            alt="Fayz Cafe"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-gray-200 text-gray-800 md:hidden"
          aria-label={isOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={`block h-0.5 w-6 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        <nav
          aria-label="Asosiy navigatsiya"
          className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-t border-gray-100 bg-white px-4 py-4 shadow-lg md:static md:flex md:flex-row md:border-0 md:p-0 md:shadow-none`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-500 md:px-3 md:py-2"
          >
            Bosh sahifa
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-500 md:px-3 md:py-2"
          >
            Biz haqimizda
          </Link>
          <Link
            to="/menu"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-500 md:px-3 md:py-2"
          >
            Menyu
          </Link>
          <Link
            to="/desert"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-500 md:px-3 md:py-2"
          >
            Desertlar
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
