// "use client"

// import { useState } from 'react';
import SidebarItems from './SidebarItems';
import SidebarItemParent from './SidebarItemParent';
export default function Sidebar({ isOpen }) {
    const sidebarClass = isOpen ? '' : 'hidden lg:flex flex-col gap-3';

    // const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };
    return (
        <div className={`h-[calc(100vh-10vh)] w-full text-[#818183] border-r pt-[25px]`}>
            <SidebarItems iconLink={"assets/icons/icon-dashboard.svg"} title={"My Dashboard"} path="/" />
            <SidebarItems iconLink={"assets/icons/icon-analysis.svg"} title={"Analytics"} path="/analytics" />
            <SidebarItemParent iconLink={"assets/icons/icon-list.svg"} title={"My Listings"}
                match={["/houses-for-rent", "/houses-for-sale"]}
                childrenElements={[
                    { title: 'Houses For Rent', path: '/houses-for-rent' },
                    { title: 'Houses For Sale', path: '/houses-for-sale' },
                ]}
            />
            <SidebarItems iconLink={"assets/icons/icon-call.svg"} title={"Call Back Requests"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/book.svg"} title={"Bookings"} path="/analytics" />
            <div className='w-[294px] h-[84px] mt-3'>
            <div className='min-w-[168px] h-[18px] text-[14px] pl-3 '>
                 Search a listing on Hauzisha
            </div>
            <input type="search" id="search" name="search" placeholder="Search listing" className='w-[254px] h-[45px] mx-[20px] mt-[10px]'/>
            </div>


            <SidebarItems iconLink={"assets/icons/icon-bill.svg"} title={"Billing"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/icon-share.svg"} title={"Referral"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/icon-dp.svg"} title={"Profile"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/faq.svg"} title={"How it works"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/logout.svg"} title={"Logout"} path="/analytics" />

            {/* <li className="flex">
                    <span className="mr-3">
                        <img src="/assets/icons/icon-analysis.svg" />
                    </span>
                    Analytics
                </li>
                <li className='cursor-pointer' >
                    <div className="flex" onClick={toggleDropdown}>
                        <div className="mr-3">
                            <img src="/assets/icons/icon-list.svg" />
                        </div>
                        <div>
                            My Listings
                        </div>
                    </div>
                    {isDropdownOpen && (
                        <ul className="ml-5">
                            <li>House for Rent</li>
                            <li>House for Sale</li>
                            <li>Furnished Apartments</li>
                            <li>Land for Sale</li>
                            <li>Under Review</li>
                            <li>Rejected</li>
                        </ul>
                    )}
                </li>
                <li className="flex">
                    <span className="mr-3">
                        <img src="/assets/icons/icon-call.svg" />
                    </span>
                    Call Back Requests
                </li>
                <li className="flex">
                    <span className="mr-3">
                        <img src="/assets/icons/book.svg" />
                    </span>
                    Bookings
                </li> */}
        </div>
    )
}