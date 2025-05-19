'use client'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-gold text-white shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">Smartz Global Ventures</h1>
      </div>
      <div className="hidden md:flex gap-6 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/subsidiaries/computer-accessories">Accessories</Link>
        <Link href="/subsidiaries/bookshop">Bookshop</Link>
        <Link href="/subsidiaries/business-center">Business Center</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>
    </nav>
  )
}
