'use client'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gold text-white z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex items-center justify-between p-4 border-b border-white">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={toggleSidebar}>
          <FaTimes size={24} />
        </button>
      </div>
      <ul className="flex flex-col p-4 gap-4 font-medium">
        <Link href="/" onClick={toggleSidebar}>Home</Link>
        <Link href="/subsidiaries/computer-accessories" onClick={toggleSidebar}>Accessories</Link>
        <Link href="/subsidiaries/bookshop" onClick={toggleSidebar}>Bookshop</Link>
        <Link href="/subsidiaries/business-center" onClick={toggleSidebar}>Business Center</Link>
        <Link href="/contact" onClick={toggleSidebar}>Contact</Link>
      </ul>
    </div>
  )
}
