"use client"

import Image from "next/image";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div className="relative">
            <div className="w-full flex justify-between h-[10vh] py-[35px] lg:py-0 items-center px-[20px] md:px-[30px] border-b bg-white">
                <div className={`lg:hidden`}>
                    <Image src="assets/icons/icon-burger.svg" alt="Hamburger Icon" width={24} height={24} className="cursor-pointer" onClick={() => { setShowMobileMenu(!showMobileMenu) }} />
                </div>

                <div className="lg:block hidden">
                    <Image src="/assets/icons/logosvg1.svg" width={137} height={45} alt={"Logo"} />
                </div>

                <div className="flex items-center justify-end gap-[10px] md:gap-[38px]">
                    <div>
                        <button className="bg-[#282828] text-white rounded-lg h-[46px] px-[25px] flex items-center gap-2 flex-nowrap text-sm md:text-base
                     min-w-[50px] md:min-w-[150px]">
                            <span> + </span> <span>Add Listing</span>
                        </button>
                    </div>

                    <div className="flex items-center min-h-[46px] gap-[8px] md:gap-[25px]">
                        <div className="">
                            <Image src="/assets/icons/icon-sms.svg" width={24} height={24} alt={""} className="min-w-[24px] min-h-[24px] w-[24px] h-[24px]" />
                        </div>
                        <div className="">
                            <Image src="/assets/icons/vector.svg" width={24} height={24} alt={""} className="min-w-[24px] min-h-[24px] w-[24px] h-[24px]" />
                        </div>
                        <div className="md:block hidden min-h-[40px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                        <div className="w-fit h-fit hidden md:block">
                            <Image src="/assets/images/pic.jpg" alt={""} width={56} height={56} className="lg:block sm:hidden min-w-[56px] min-h-[56px] w-[56px] h-[56px]  rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${showMobileMenu ? "pointer-events-auto opacity-100 h-[(calc(100vh-13vh))] overflow-auto" : "pointer-events-none opacity-0 h-0"} transition-all fixed z-50 top-[13vh] left-0 w-full bg-white`}>
                <Sidebar />
            </div>
        </div>
    )
}