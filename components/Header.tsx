import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-4">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt="Medium Logo"
          />
        </Link>
        <div className="hidden items-center space-x-6 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 py-1 px-3 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex space-x-6 text-green-600">
        <h3 className="px-3 py-1">Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-3 py-1">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
