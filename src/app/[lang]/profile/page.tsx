'use client'
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import TabNavigation from '@/src/components/common/navigation/Navigation'
import Logout from '@/src/components/auth/Logout'

interface ProfileFormValues {
	name: string
	email: string
}
export default function ProfilePage() {
	const { data: session, status } = useSession()
	const { register, handleSubmit } = useForm<ProfileFormValues>()

	const onSubmit = async (data: ProfileFormValues) => {
		// フォームの送信処理を実装する
		console.log(data)
	}

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
				<p className="mb-4 text-lg">
					アクセスするにはログインが必要です。
				</p>
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

	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="container mx-auto p-6">
				<h1 className="text-3xl font-bold mb-6">プロフィール</h1>
				{session?.user && (
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">認証情報</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex flex-col">
									<label className="text-gray-700">
										名前
									</label>
									<input
										{...register('name')}
										type="text"
										defaultValue={
											session.user.name || userName
										}
										className="border rounded-md p-2"
									/>
								</div>
								<div className="flex flex-col">
									<label className="text-gray-700">
										メール
									</label>
									<input
										{...register('email')}
										type="text"
										defaultValue={
											session.user.email as string
										}
										className="border rounded-md p-2"
									/>
								</div>
								<div className="col-span-2">
									<button
										type="submit"
										className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out mr-4"
									>
										更新する
									</button>
									<Logout/>
								</div>
							</div>
						</form>
					</div>
				)}
			</div>
			<TabNavigation />
		</div>
	)
}
