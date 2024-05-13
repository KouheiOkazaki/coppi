import { NextRequest, NextResponse } from 'next/server'
import { i18n } from '../i18n-config' // i18n 設定をインポート

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'


function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {}
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
	const locales: string[] = [...i18n.locales]
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	)
	const locale = matchLocale(languages, locales, i18n.defaultLocale)
	return locale
}

export { auth } from "@/src/libs/auth"

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone()
	const pathname = url.pathname

	// ローカリゼーション処理
	if (i18n.locales.some((locale) => pathname.startsWith(`/${locale}`))) {
		// ロケールがURLに含まれている場合、何もしない
	} else {
		// ロケールがない場合、ロケールを付加してリダイレクト
		const locale = getLocale(request) || i18n.defaultLocale
		url.pathname = `/${locale}${pathname}`
		return NextResponse.redirect(url)
	}
	return NextResponse.next()
}
export const config = {
	matcher: ['/((?!_next|auth|api).*)'],
}
