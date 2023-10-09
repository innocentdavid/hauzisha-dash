"use client";

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import IconDashboard from './icons/IconDashboard'
import Link from 'next/link'

export default function SidebarItemParent({ iconLink, title, match }) {
  const pathName = usePathname()
  const modalRef = useRef(null)
  const selected = match.some(match => pathName.startsWith(match))
  const [showModal, setShowModal] = useState(false)

  // modalRef
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef?.current?.contains(event.target)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div ref={modalRef} className="px-5">
      <div className={`flex items-center h-[40px] w-full cursor-pointer text-[#282828] hover:bg-[#F2F8FF] group hover:text-[#0D6EFD] ${selected && "bg-[#F2F8FF] text-[#0D6EFD] font-medium"}`}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <span className="mr-3">
          <Image src={iconLink} alt="" width={20} height={20} className={`${selected ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`} />
        </span>
        <div className="text-inherit">{title}</div>
      </div>

      {showModal && <div className="w-full ml-[20px] pl-3 flex flex-col gap-3">
        <div className="flex">Houses for Rent </div>
        <div className="flex">Houses for Sale </div>
        <div className="flex">Furnished Apartments </div>
        <div className="flex"> Land for Sale</div>
        <div className="flex"> Under Review</div>
        <div className="flex"> Rejected </div>
      </div>}
    </div>
  )
}
