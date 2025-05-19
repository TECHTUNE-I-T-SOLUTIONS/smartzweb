'use client'

import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gold text-white mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">Smartz Global Ventures</h3>
          <p>Serving you with quality books, computer accessories, and business services.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/">Home</a></li>
            <li><a href="/subsidiaries/computer-accessories">Accessories</a></li>
            <li><a href="/subsidiaries/bookshop">Bookshop</a></li>
            <li><a href="/subsidiaries/business-center">Business Center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            <FaFacebook />
            <FaInstagram />
            <FaEnvelope />
          </div>
          <p className="mt-2 text-xs">Email: smartzventures@gmail.com</p>
        </div>
      </div>
      <div className="bg-black bg-opacity-30 text-center p-3 text-xs">
        © {new Date().getFullYear()} Smartz Global Ventures. All rights reserved.
      </div>
    </footer>
  )
}
