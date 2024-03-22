import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || '',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  // Google認証を使用する場合、追加のページ設定はオプショナルです。
  // 必要に応じてコメントアウトを解除し、カスタマイズしてください。
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // エラーコードはクエリ文字列で ?error= として渡されます
  //   verifyRequest: '/auth/verify-request', // メール確認メッセージ用（メール送信がある場合）
  //   newUser: '/auth/new-user' // 新規ユーザー登録ページ（オプショナル）
  // }
}
export default authOptions
