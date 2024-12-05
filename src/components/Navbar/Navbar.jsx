import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold">Logo</a>
        
        {/* Menu */}
        <div className="w-full flex justify-center">
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="px-3 text-gray-900 hover:text-red-600">Dashboard</a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-3 text-gray-900 hover:text-red-600"
              >
                Car
                <span className="ml-2">▼</span> {/* Down Arrow */}
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Model</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Maker</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Parts</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="px-3 text-gray-900 hover:text-red-600">Service</a>
            </li>
            <li>
              <a href="#" className="px-3 text-gray-900 hover:text-red-600">History</a>
            </li>
          </ul>
        </div>
        
 {/* User Icon (At the end) */}
 <div className="relative flex items-center">
          <button
            onClick={toggleUserDropdown}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <span className="text-gray-700">U</span> {/* Temporary user icon */}
          </button>
          {userDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-menu"
          aria-expanded={dropdownOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${dropdownOpen ? "block" : "hidden"} md:hidden`} id="navbar-menu">
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li><a href="#" className="px-3 text-gray-900">Dashboard</a></li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-3 text-gray-900"
            >
              Car
              <span className="ml-2">▼</span> {/* Down Arrow */}
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Model</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Maker</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Parts</a></li>
                </ul>
              </div>
            )}
          </li>
          <li><a href="#" className="px-3 text-gray-900">Service</a></li>
          <li><a href="#" className="px-3 text-gray-900">History</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
