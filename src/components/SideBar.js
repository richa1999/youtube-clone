import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-6 w-56 shadow-lg bg-white sticky top-0 h-screen overflow-auto">
      <ul className="space-y-2">
        <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-200">
          <li className="cursor-pointer font-semibold">Home</li>
        </Link>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Shorts</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Videos</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Live</li>
      </ul>

      <h1 className="font-bold pt-6 pb-2 border-b border-gray-300">Subscriptions</h1> 
      <ul className="space-y-2 mt-3">
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Music</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Sports</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Gaming</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Movies</li>
      </ul>

      <h1 className="font-bold pt-6 pb-2 border-b border-gray-300">Watch Later</h1> 
      <ul className="space-y-2 mt-3">
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Music</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Sports</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Gaming</li>
        <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200">Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
