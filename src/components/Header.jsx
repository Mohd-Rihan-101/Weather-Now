import React from 'react';
import { Link } from 'react-router-dom';
// import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-purple-500 text-white p-4 flex items-center justify-between">
      {/* <button className="text-2xl">
        <BiMenuAltLeft />
      </button> */}
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/Contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
