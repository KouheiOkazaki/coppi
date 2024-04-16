'use client';
import React from 'react';
import Link from 'next/link';

export default function TabNavigation() {
  return (
    <nav className="flex space-x-4 border-b">
      <Link
        href="/ja/cupping"
        className="py-2 px-4 text-gray-500 hover:text-blue-500 transition duration-200 ease-in-out"
      >
        Cupping
      </Link>
      <Link
        href="/ja/profile"
        className="py-2 px-4 text-gray-500 hover:text-blue-500 transition duration-200 ease-in-out"
      >
        Profile
      </Link>
      <Link
        href="/ja/setting"
        className="py-2 px-4 text-gray-500 hover:text-blue-500 transition duration-200 ease-in-out"
      >
        Setting
      </Link>
      {/* 他のタブ用のリンクを追加 */}
    </nav>
  );
}
