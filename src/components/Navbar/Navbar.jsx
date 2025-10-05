import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (navRef.current) {
      setMaxHeight(open ? `${navRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between py-2 px-4 mx-10 rounded-full bg-white/50 backdrop-blur-md shadow-lg border border-white/20">
          
          {/* Logo */}
          <div className="px-4">
            <a
              href="#uppest"
              className="font-bold text-lg block py-2 hover:text-darkPrimary transition duration-300 ease-in-out text-primary"
            >
              BethaPup
            </a>
            
          </div>

          {/* Hamburger & Menu */}
          <div className="relative flex items-center">
            {/* Hamburger button */}
            <button
              onClick={() => setOpen(!open)}
              className="block lg:hidden p-2"
            >
              <span
                className={`block w-6 h-0.5 bg-black my-1 transition-transform duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ease-in-out ${
                  open ? "opacity-0 w-0" : "opacity-100 w-6"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black my-1 transition-transform duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {/* Nav menu dengan slide down */}
            <nav 
              ref={navRef} 
              className={absolute top-[65px] min-w-[200px] right-0 bg-white shadow-lg rounded-lg overflow-hidden transition-max-height duration-300 lg:block lg:static lg:translate-x-0 lg:flex lg:bg-transparent lg:shadow-none lg:rounded-none} 
              style={{ maxHeight }} 
            >
              <ul className="block lg:flex">
                <li>
                  <a href="#beranda" className="text-base text-dark py-2 mx-8 flex hover:text-primary transition duration-300 ease-in-out">Beranda</a><nav
              ref={navRef}
              className={`absolute top-[65px] right-0 bg-white shadow-lg rounded-lg overflow-hidden transition-[200px] duration-300 lg:static lg:flex lg:bg-transparent lg:shadow-none lg:rounded-none lg:overflow-visible lg:max-h-none`}
              style={{ maxHeight: open ? `${navRef.current?.scrollHeight}px` : "0px" }}
            >
                </li>
                <li>
                  <a href="#about" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Tentang Saya</a>
                </li>className={`absolute top-[65px] min-w-[200px] right-0 bg-white shadow-lg rounded-lg overflow-hidden transition-max-height duration-300 lg:block lg:static lg:translate-x-0 lg:flex lg:bg-transparent lg:shadow-none lg:rounded-none`}
              style={{ maxHeight }}
                <li>
                  <a href="#portfolio" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Portfolio</a>
                </li>
                <li>
                  <a href="#experience" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Experience</a>
                </li>
                <li>
                  <a href="#skills" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Skills</a>
                </li>
                <li>
                  <a href="#contact" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
