'use client'
import React from 'react'
import Login from '@/src/components/auth/Login'
import Logout from '@/src/components/auth/Logout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <div>
      {status === 'authenticated' ? (
        <div>
          <p>セッションの期限：{session.expires}</p>
          <p>ようこそ、{session.user?.name}さん</p>
          {session.user?.image && (
            <div
              style={{ position: 'relative', width: '100px', height: '100px' }}
            >
              <Image
                src={session.user?.image ?? ``}
                alt="User Image"
                fill
                style={{ borderRadius: '50%' }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div>
            <Logout />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}
