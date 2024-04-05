// components/TabNavigation.tsx
import React from 'react'
import Link from 'next/link'

const TabNavigation: React.FC = () => {
  return (
    <nav className="flex space-x-4 border-b">
      <Link
        href="/ja/cupping"
        className="py-2 px-4 text-blue-500 border-b-2 border-blue-500"
      >
        Cupping
      </Link>
      <Link
        href="/ja/profile"
        className="py-2 px-4 text-gray-500 hover:text-blue-500"
      >
        Profile
      </Link>
      <Link
        href="/ja/setting"
        className="py-2 px-4 text-gray-500 hover:text-blue-500"
      >
        Setting
      </Link>
      {/* 他のタブ用のリンクを追加 */}
    </nav>
  )
}

export default TabNavigation
