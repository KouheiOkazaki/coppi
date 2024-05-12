'use client'
import React, { useEffect } from 'react'
import Login from '@/src/components/auth/Login'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	const { status } = useSession()

	// sessionが取得できた場合、'/ja'にリダイレクトする
	useEffect(() => {
		if (status === 'authenticated') {
			router.push('/ja')
		}
	}, [router, status])

	return <div>{status === 'authenticated' ? null : <Login />}</div>
}