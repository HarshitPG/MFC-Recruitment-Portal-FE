import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const Navbar = () => {
  const [menuHelper, setMenuHelper] = useState(-1);

  return (
    <div className="nav h-full  w-full md:max-w-[100px] flex flex-row md:flex-col justify-around md:border-8 border-dashed items-center border-prime md:border-r-0  p-4 md:p-0 border-b-0 border-4">
      <a href="/dashboard" className="relative z-[150]">
        <img
          className="nes-avatar is-medium w-full invert scale-75 lg:scale-100"
          alt="Dashboard"
          src="/dashboard.png"
          style={{ imageRendering: "pixelated" }}
          onMouseEnter={() => setMenuHelper(0)}
          onMouseLeave={() => setMenuHelper(-1)}
        />
        {menuHelper === 0 && (
          <div className="absolute z-[150] -bottom-12 left-1/2 -translate-x-1/2 scale-75">
            <a href="#" className="nes-badge">
              <span className="is-error">Dashboard</span>
            </a>
          </div>
        )}
      </a>
      <a href="/about" className="relative z-[150] scale-75 lg:scale-100">
        <img
          className="nes-avatar is-medium w-full"
          alt="About"
          src="/mfc-logo.png"
          style={{ imageRendering: "pixelated" }}
          onMouseEnter={() => setMenuHelper(1)}
          onMouseLeave={() => setMenuHelper(-1)}
        />
        {menuHelper === 1 && (
          <div className="absolute z-[150] -bottom-12 left-1/2 -translate-x-1/2 scale-75">
            <a href="#" className="nes-badge">
              <span className="is-error">About</span>
            </a>
          </div>
        )}
      </a>
      <a className="relative z-[150] scale-75 lg:scale-100" href="/faq">
        <img
          className="nes-avatar is-medium w-full invert"
          alt="Dashboard"
          src="/faq.png"
          style={{ imageRendering: "pixelated" }}
          onMouseOver={() => setMenuHelper(2)}
          onMouseLeave={() => setMenuHelper(-1)}
        />
        {menuHelper === 2 && (
          <div className="absolute z-[150] -bottom-12 left-1/2 -translate-x-1/2 scale-75">
            <a href="#" className="nes-badge">
              <span className="is-error">FAQs</span>
            </a>
          </div>
        )}
      </a>
      <a className="relative z-[150] scale-75 lg:scale-100" href="/profile">
        <img
          className="nes-avatar is-medium w-full invert"
          alt="Profile"
          src="/profile.png"
          style={{ imageRendering: "pixelated" }}
          onMouseOver={() => setMenuHelper(3)}
          onMouseLeave={() => setMenuHelper(-1)}
        />
        {menuHelper === 3 && (
          <div className="absolute z-[150] -bottom-12 left-1/2 -translate-x-1/2 scale-75">
            <a href="#" className="nes-badge">
              <span className="is-error">Profile</span>
            </a>
          </div>
        )}
      </a>
      <a
        className="relative z-[150] scale-75 lg:scale-100"
        href="/"
        onClick={() => {
          Cookies.remove("jwtToken");
        }}
      >
        <img
          className="nes-avatar is-medium w-full invert"
          alt="Logout"
          src="/logout.png"
          style={{ imageRendering: "pixelated" }}
          onMouseOver={() => setMenuHelper(4)}
          onMouseLeave={() => setMenuHelper(-1)}
        />
        {menuHelper === 4 && (
          <div className="absolute z-[150] -bottom-12 left-1/2 -translate-x-1/2 scale-75">
            <a href="#" className="nes-badge">
              <span className="is-error">Logout</span>
            </a>
          </div>
        )}
      </a>
    </div>
  );
};

export default Navbar;
