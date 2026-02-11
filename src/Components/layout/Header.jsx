import { NavLink } from "react-router-dom";
import Logo from "../../assets/nft logo.svg";
import { useState, useEffect } from "react";

import { FiSearch } from "react-icons/fi";

function NavItem({ label, name, active, setActive }) {
  return (
    <NavLink
      className={`py-1 lg:py-2 hover:text-gray-300 transition-all duration-300 ${active === name ? "text-white border-b hover:text-white" : "text-gray-400"}`}
      onClick={() => setActive(name)}
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full p-5 md:px-10 lg:px-20 md:py-10">
      <div className="grid grid-cols-[auto_1fr_auto] gap-5 lg:gap-15 xl:gap-0 xl:grid-cols-3 items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" loading="lazy" className="w-20 md:w-25" />
        </div>
        {/* Nav links */}
        <div className="hidden lg:flex items-center justify-between">
          <NavItem
            label="Home"
            name="home"
            active={active}
            setActive={setActive}
          />
          <NavItem
            label="Explore"
            name="explore"
            active={active}
            setActive={setActive}
          />
          <NavItem
            label="Marketplace"
            name="marketplace"
            active={active}
            setActive={setActive}
          />
          <NavItem
            label="Artists"
            name="artists"
            active={active}
            setActive={setActive}
          />
          <NavItem
            label="News"
            name="news"
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-5 text-white">
          <button
            className="p-0.5 rounded-full md:rounded-xl
           bg-linear-to-r from-(--color2) to-(--color3) group"
          >
            <div className="py-2 md:py-2 px-2 md:px-5 bg-(--color1) flex items-center gap-2 rounded-full md:rounded-xl group-hover:bg-(--color1)/60 transition-all duration-300">
              <FiSearch className="fill-current text-blue-300 group-hover:scale-120" />
              <span className="hidden md:block text-sm md:text-base">
                Search
              </span>
            </div>
          </button>

          <button
            className="group relative overflow-hidden
            py-2 md:py-2.5 px-6 md:px-8 rounded-xl
             bg-linear-to-r from-(--color2) to-(--color3)
             text-sm md:text-base hover:shadow-xl shadow-white/20 transition-all duration-300"
          >
            Register
            {/* shine */}
            <span
              className="pointer-events-none absolute top-[-30%] left-[-40%]
               h-[160%] w-[20%] rotate-25
               bg-linear-to-r from-transparent via-white/60 to-transparent
               blur-xs opacity-0 transition-all duration-700
               group-hover:left-[120%] group-hover:opacity-100"
            />
          </button>
        </div>

        {/* Mobile handburger menu */}
        <div
          className=" cursor-pointer relative lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-2">
            {/* top */}
            <div
              className={`w-8 h-1 rounded-2xl bg-(--color3) transition-all duration-300
               ${open ? "rotate-45 translate-y-3" : ""}`}
            ></div>

            {/* center */}
            <div
              className={`w-8 h-1 rounded-2xl bg-(--color3) transition-all duration-300 
              ${open ? "opacity-0" : ""}`}
            ></div>

            {/* bottom */}
            <div
              className={`w-8 h-1 rounded-2xl bg-(--color3) transition-all duration-300 
              ${open ? "-rotate-45 -translate-y-3" : ""}`}
            ></div>
          </div>

          {/* Menu list */}
          <div
            className={`absolute flex flex-col justify-between h-[35vh] px-10 md:pr-15 py-5
               bg-(--color1)/85 backdrop-blur-xs rounded-4xl border border-white/30 top-15
             ${open ? "-translate-x-35 md:-translate-x-25 opacity-100" : "translate-x-20 opacity-0"} transition-all duration-500`}
          >
            <NavItem
              label="Home"
              name="home"
              active={active}
              setActive={setActive}
            />
            <NavItem
              label="Explore"
              name="explore"
              active={active}
              setActive={setActive}
            />
            <NavItem
              label="Marketplace"
              name="marketplace"
              active={active}
              setActive={setActive}
            />
            <NavItem
              label="Artists"
              name="artists"
              active={active}
              setActive={setActive}
            />
            <NavItem
              label="News"
              name="news"
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
