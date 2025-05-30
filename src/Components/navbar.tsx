import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    { name: 'Home', id: 0, path: '/' },
    { name: 'Projects', id: 1, path: '/projects' },
    { name: 'Education', id: 2, path: '/education' },
    // { name: 'Misc', id: 3, path: '/misc' },
  ]

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === location.pathname)
    if (currentTab) {
      setActiveTab(currentTab.id)
    }
  }, [location.pathname])

  const handleTabClick = (tabId: number) => {
    navigate(tabs[tabId].path)
  }

  return (
    <div className="w-full bg-gray-800 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-40 relative" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`group relative py-2 px-1 text-sm font-medium ${
                activeTab === tab.id ? 'text-gray-400' : 'text-gray-400 hover:text-gray-200 cursor-pointer'
              } transition-colors duration-300`}
            >
              {tab.name}

              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-transform duration-300 ease-out origin-left" />

              {activeTab === tab.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
