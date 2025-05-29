import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: 'Home', id: 0, path: '/' },
    { name: 'Projects', id: 1, path: '/drivers' },
    { name: 'Education', id: 2, path: '/constructors' },
    { name: 'Misc', id: 3, path: '/live' },
  ]

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === location.pathname)
    if (currentTab) {
      setActiveTab(currentTab.id)
    }
  }, [location.pathname])

  return (
    <div className="w-full bg-gray-800 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <nav className="flex justify-center space-x-12" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className="group relative py-2 px-1 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors duration-300 cursor-pointer"
              >
                <span>{tab.name}</span>

                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out cursor-pointer" />

                {activeTab === tab.id && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"
                    layoutId="activeTabIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
