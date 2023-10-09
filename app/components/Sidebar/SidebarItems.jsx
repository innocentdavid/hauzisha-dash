"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import IconDashboard from './icons/IconDashboard'
import Link from 'next/link'

export default function SidebarItems({ iconLink, title, path}) {
    const pathName = usePathname()

    return (
        <Link href={path} className={`flex items-center px-[20px] min-h-[40px] w-full cursor-pointer text-[#282828] hover:bg-[#F2F8FF] hover:text-[#0D6EFD] group ${pathName === path && "bg-[#F2F8FF] text-[#0D6EFD] font-medium"}`}>
            <span className="mr-3">
                <Image src={iconLink} alt="" width={20} height={20} className={`${pathName === path ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`} />
            </span>
            <div className="text-inherit">{title}</div>
        </Link>
    )
}
