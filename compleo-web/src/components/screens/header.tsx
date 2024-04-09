"use client";
import Link from "next/link"
import { useState } from "react"
import { JSX, SVGProps } from "react"
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col w-full items-center">
      <div className="fixed top-5 z-50 w-3/5">
        <header className="bg-blue-500/30 backdrop-blur-lg transition-colors h-16 w-full rounded-xl">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <Link className="flex items-center" href="#">
              <CompleoIcon className="h-6 w-6" />
            </Link>
            <button
              className="md:hidden p-2 text-white relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ padding: '10px' }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <nav className="hidden md:flex space-x-4 text-sm font-medium">
              <Link className="mx-2.5 inline-block p-2.5 rounded-md text-white hover:bg-blue-100/50" href="/">Home</Link>
              <Link className="mx-2.5 inline-block p-2.5 rounded-md text-white hover:bg-blue-100/50" href="/features">Features</Link>
              <Link className="mx-2.5 inline-block p-2.5 rounded-md text-white hover:bg-blue-100/50" href="/pricing">Pricing</Link>
              <Link className="mx-2.5 inline-block p-2.5 rounded-md text-white hover:bg-blue-100/50" href="/contact">Contact</Link>
            </nav>
          </div>

        
            <div
              className={`absolute top-full right-0 w-1/2 rounded-lg bg-cyan-400 md:hidden transition-all duration-1000 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
              style={{ visibility: isMenuOpen ? 'visible' : 'hidden', transitionDelay: isMenuOpen ? '0ms' : '250ms' }}
            >
              <nav className="flex flex-col items-center p-4 text-sm font-medium">
                <Link className="my-2 p-2 rounded-md text-black hover:bg-blue-100/50" href="/">Home</Link>
                <Link className="my-2 p-2 rounded-md text-black hover:bg-blue-100/50" href="/features">Features</Link>
                <Link className="my-2 p-2 rounded-md text-black hover:bg-blue-100/50" href="/pricing">Pricing</Link>
                <Link className="my-2 p-2 rounded-md text-black hover:bg-blue-100/50" href="/contact">Contact</Link>
              </nav>
            </div>
          

        </header>
      </div>
    </div>
  )
}

function CompleoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return(
    <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_93_128)">
        <path d="M61.3923 0.680786V15.6227C72.6606 19.159 81.5534 28.0697 85.0624 39.3512H99.9999C95.8259 20.0721 80.6641 4.88583 61.3923 0.680786Z" fill="white"/>
        <path d="M85.0465 60.3484C80.3398 75.1862 66.3116 85.8791 49.8318 85.5387C30.5721 85.1422 14.8575 69.4313 14.4649 50.1722C14.1284 33.6684 24.8639 19.6155 39.7533 14.9419V0C13.9922 5.62275 -4.43031 30.865 0.933419 59.2751C4.73089 79.3993 20.5937 95.2663 40.7267 99.0669C69.1156 104.429 94.3399 86.0553 100.004 60.3484H85.0505H85.0465Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_93_128">
          <rect width="101" height="100.001" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}