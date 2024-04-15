import React from "react";
import HostEaseLogo from "./hostease-logo";
import Hamburgericon from "./buttons/hamburgermenu";
import MenuNav from "./navigation/menu";
import ActionButtons from "./buttons/actionbuttons";

export default function LandingHeader() {
    return (

            <div className=" flex items-center bg-white m-5 p-4 justify-between  rounded-full">
            <HostEaseLogo />

            <div className="hidden md:block">
                <MenuNav />
            </div>

            <div className="flex items-center">
                <ActionButtons />
            </div>

            </div>
        

    )
}