import { signOut, useSession } from 'next-auth/react'

export default function Logout() {
  const { status } = useSession()

  if (status === 'authenticated') {
    return (
      <div>
        <button
          onClick={() => signOut()}
          className="border border-red-500 hover:bg-red-100 text-red-500 py-2 px-4 rounded"
        >
          ログアウト
        </button>
      </div>
    )
  }
  return null
}
