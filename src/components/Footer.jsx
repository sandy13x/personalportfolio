import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="w-full backdrop-blur-md bg-white/10 border-t border-white/20 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold">Sandeep Rajawat</h1>
          <p className="text-sm text-gray-300">Building the web, one pixel at a time.</p>
        </div>
        <div className="flex gap-6 mt-6 md:mt-0">
          <Link
            href="https://github.com/sandy13x"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sandeep-rajawat-29756b294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/sxndy13x?igsh=MTN5MTZkOGttOGhxYw=="
            className="hover:text-pink-400 transition"
          >
            Instagram
          </Link>

        </div>
        <div className="text-sm text-gray-400 mt-6 md:mt-0 text-center md:text-right">
          © {new Date().getFullYear()} Sandeep Rajawat. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer