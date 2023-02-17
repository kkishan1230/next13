import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="p-[20px] text-white bg-gray-800 w-[100vw] flex gap-[20px]">
      <Link href="/">Home</Link>
      <Link href="/contact">Contacts</Link>
      <Link href="/contact/location">Location</Link>
      <Link href="/todos">Todo</Link>
    </div>
  );
};

export default NavBar;
