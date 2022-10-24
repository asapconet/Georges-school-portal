import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <ul className="nav flex gap-x-3 items-end bg-black">
        <li>Staff Directory</li>
        <li>Virtual classroom</li>
        <li>OER</li>
        <li>Transcript application</li>
        <li>Portal</li>
        <li>
          <FaSearch />
        </li>
      </ul>
    </>
  );
};

export default Header;
