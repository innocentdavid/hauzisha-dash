

import Image from "next/image";

export default function Header({ isOpen, toggleSidebar }) {

    return (
        <div className="w-full flex justify-between h-[10vh] items-center px-[30px] border-b bg-white">
            <div className={`lg:hidden sm:block ${isOpen ? "" : "hidden"}`}>
                <button onClick={toggleSidebar}>
                    <Image src="assets/icons/icon-burger.svg" alt="Hamburger Icon" width={24} height={24} />
                </button>
            </div>

            <div className=" lg:block hidden">
                <Image src="/assets/icons/logosvg1.svg" width={137} height={45} alt={"Logo"} />
            </div>

            <div className="flex items-center justify-end gap-[38px]">
                <div>
                    <button className="bg-[#282828] text-white rounded-lg h-[46px] px-[25px] flex items-center gap-2 flex-nowrap min-w-[150px]">
                        <span> + </span> <span>Add Listing</span>
                    </button>
                </div>

                <div className="flex items-center min-h-[46px] gap-[25px]">
                    <div className="">
                        <Image src="/assets/icons/icon-sms.svg" width={24} height={24} alt={""} className="min-w-[24px] min-h-[24px] w-[24px] h-[24px]" />
                    </div>
                    <div className="">
                        <Image src="/assets/icons/vector.svg" width={24} height={24} alt={""} className="min-w-[24px] min-h-[24px] w-[24px] h-[24px]" />
                    </div>
                    <div className="lg:block sm:hidden min-h-[40px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                    <div className="w-fit h-fit">
                        <Image src="/assets/images/pic.jpg" alt={""} width={56} height={56} className="lg:block sm:hidden min-w-[56px] min-h-[56px] w-[56px] h-[56px]  rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}