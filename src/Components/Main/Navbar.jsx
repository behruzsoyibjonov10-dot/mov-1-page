import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-20 py-2">
      <div>
        <div className="max-w-[1500px] mx-auto">
          <nav className="h-[98px] flex items-center justify-between">

            <div className="flex items-center gap-3 cursor-pointer">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/img/LOGO.png"
                  alt="StreamVibe"
                  className="h-15 w-15"
                />
                <span className="text-white text-xl font-bold tracking-wide">
                  StreamVibe
                </span>
              </a>
            </div>

            <ul className="hidden lg:flex items-center gap-12 text-[15px] border-b-2 rounded-xl py-5 px-5 bg-black">
              {[
                { name: "Home", path: "/" },
                { name: "Movies & Shows", path: "/movies" },
                { name: "Support", path: "/support" },
                { name: "Subscriptions", path: "/subscriptions" },
                { name: "Register", path: "/register" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      relative pb-1 transition-all duration-300
                      ${
                        isActive
                          ? "text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600"
                          : "text-gray-400 hover:text-white"
                      }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5">

              <button className="w-7 h-7 flex items-center justify-center rounded-full transition">
                <img
                  src="./icon/Search.png"
                  alt="Search"
                  className="opacity-80 w-full h-full"
                />
              </button>

              <button className="w-7 h-7 flex items-center justify-center rounded-full transition">
                <img
                  src="./icon/Notification.png"
                  alt="Notifications"
                  className="w-full h-full opacity-80"
                />
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden flex flex-col gap-1 ml-2 z-50"
              >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        lg:hidden`}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-black z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:hidden`}
      >
        <div className="px-6 py-10">
          <ul className="flex flex-col gap-6 text-gray-400 text-lg">
            {[
              { name: "Home", path: "/" },
              { name: "Movies & Shows", path: "/movies" },
              { name: "Support", path: "/support" },
              { name: "Subscriptions", path: "/subscriptions" },
              { name: "Register", path: "/register" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "hover:text-white"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
