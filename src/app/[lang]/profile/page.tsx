'use client'
// pages/profile.tsx
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import type { NextPage } from 'next'
import TabNavigation from '@/src/components/common/navigation/Navigation'

const ProfilePage: NextPage = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    )
  }

  if (status !== 'authenticated') {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="mb-4 text-lg">アクセスするにはログインが必要です。</p>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          ログイン
        </button>
      </div>
    )
  }

  // 仮のユーザー情報とプラン情報
  const userName = '仮ユーザー名'
  const userPlan = 'free'

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">プロフィール</h1>
        {session.user && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">認証情報</h2>
            <div className="mt-4">
              <p>
                <strong>名前:</strong> {session.user.name || userName}
              </p>
              <p>
                <strong>メール:</strong> {session.user.email}
              </p>
              <p>
                <strong>プラン:</strong> {userPlan}
              </p>
            </div>
          </div>
        )}
      </div>
      <TabNavigation />
    </div>
  )
}

export default ProfilePage
