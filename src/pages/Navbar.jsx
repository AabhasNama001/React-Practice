import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-5 cursor-pointer bg-gray-900 text-2xl fixed z-10 w-full">
      <h4>Aabhas Nama</h4>
      <div className="flex gap-x-20 transition-colors ease-in-out">
        <h4 className="hover:text-blue-400">Home</h4>
        <h4 className="hover:text-blue-400">Work</h4>
        <h4 className="hover:text-blue-400">Contact</h4>
        <h4 className="hover:text-blue-400">About</h4>
      </div>
    </div>
  );
};

export default Navbar;
