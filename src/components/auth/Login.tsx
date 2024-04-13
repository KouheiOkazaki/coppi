import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import googleLogo from '@public/web_light_sq_ctn@4x.png' // ロゴ画像のパスを適切に設定

export default function Login() {
	const { status } = useSession()

	if (status === 'loading') {
		return <div className="text-center py-4">Loading...</div>
	}

	if (status !== 'authenticated') {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
				<div className="bg-white p-8 rounded-lg shadow-md w-96">
					<h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
						ログイン
					</h2>
					<div className="flex flex-col items-center">
						<button
							onClick={() =>
								signIn('google', {}, { prompt: 'login' })
							}
							className="gsi-material-button"
						>
							<div className="gsi-material-button-content-wrapper">
								<div className="gsi-material-button-icon">
									<Image
										src={googleLogo}
										alt="Google"
										width={200}
									/>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		)
	}
	return null
}
