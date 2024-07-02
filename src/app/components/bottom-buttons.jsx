import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const BottomButtons = () => {
  return (
    <div className=" flex items-center  justify-evenly fixed bottom-0 bg-white w-full h-[60px] ">
      <Link href="/content">
        <button className="h-9 w-9 bg-green-500 rounded-full"></button>
      </Link>
      <Link href="/">
        <button className="h-9 w-9 bg-green-500 rounded-full"></button>
      </Link>
      <Link href="/listpage2">
        <button className="h-9 w-9 bg-green-500 rounded-full"></button>
      </Link>
      <Link href="/additem">
        <button className="h-9 w-9 bg-green-500 rounded-full"></button>
      </Link>
      <Link href="/">
        <button className="h-9 w-9 bg-green-500 rounded-full"></button>
      </Link>
    </div>
  );
};

export default BottomButtons;
