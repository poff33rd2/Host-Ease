import React from "react";
import Hamburgericon from "./hamburgermenu";
import Link from 'next/link';

export default function ActionButtons() {
    return (
        <>
        <Link href='app/dashboard/page.tsx'>Log In</Link>
        <a className="hidden bg-red-500 text-white px-3 py-2 rounded-full hover:bg-blue-700 md:block font-semibold">Demo</a>
        {/* <a href="@/app/dashboard/" className=" hidden text-black hover:text-gray-300 px-2  md:block">Log In</a> */}
        <Hamburgericon />
        </>
        
    )   
}