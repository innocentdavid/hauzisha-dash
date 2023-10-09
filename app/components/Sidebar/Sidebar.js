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
        <div className={`h-[calc(100vh-10vh)] w-full text-grey border-r pt-[25px] ${sidebarClass}`}>
            <SidebarItems iconLink={"assets/icons/icon-dashboard.svg"} title={"My Dashboard"} path="/" />
            <SidebarItems iconLink={"assets/icons/icon-dashboard.svg"} title={"Analytics"} path="/analytics" />
            <SidebarItemParent iconLink={"assets/icons/icon-dashboard.svg"} title={"My Listings"}
                match={["/houses-for-rent", "/houses-for-sale"]}
                childrenElements={[
                    { title: 'Houses For Rent', path: '/houses-for-rent' },
                    { title: 'Houses For Sale', path: '/houses-for-sale' },
                ]}
            />
            <SidebarItems iconLink={"assets/icons/icon-dashboard.svg"} title={"My Dashboard"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/icon-dashboard.svg"} title={"My Dashboard"} path="/analytics" />
            <SidebarItems iconLink={"assets/icons/icon-dashboard.svg"} title={"My Dashboard"} path="/analytics" />
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