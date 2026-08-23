import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 flex items-center justify-between px-6 md:px-8 py-3.5 shadow-xs transition-all duration-300">
      <NavLink to="/home" className="flex items-center gap-2">
        <span className="text-2xl">✈️</span>
        <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
          TravelMate AI
        </h1>
      </NavLink>

      <ul className="hidden md:flex gap-6 lg:gap-7 text-gray-600 font-semibold items-center text-sm">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `relative py-1 transition-colors duration-200 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 ${
                isActive
                  ? "text-sky-600 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              `relative py-1 transition-colors duration-200 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 ${
                isActive
                  ? "text-sky-600 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/planner"
            className={({ isActive }) =>
              `relative py-1 transition-colors duration-200 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 ${
                isActive
                  ? "text-sky-600 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Planner
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/travel-dna"
            className={({ isActive }) =>
              `relative py-1 transition-colors duration-200 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 flex items-center gap-1 ${
                isActive
                  ? "text-sky-600 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            <span>🧬</span>
            <span>Travel DNA</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-1 transition-colors duration-200 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 ${
                isActive
                  ? "text-sky-600 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2 sm:gap-3">
        <NavLink
          to="/planner"
          className="hidden sm:inline-flex bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all duration-200"
        >
          Plan Now
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 transition-all duration-200 cursor-pointer"
          title="Sign out of your account"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;