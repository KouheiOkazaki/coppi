'use server'

import { CoeFormData } from '@/src/commons/types/type'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function postFormAction(data: FormData) {
	console.log('serveraction', data)
	let redirectRequested = false // リダイレクトするかの判定フラグ
	try {
		const formData: CoeFormData = {
			// FormData から必要なプロパティを抽出する
			sampleNo: data.get('sampleNo') as string,
			roastLevel: data.get('roastLevel') as string,
			dryAroma: Number(data.get('dryAroma')),
			crustAroma: Number(data.get('crustAroma')),
			breakAroma: Number(data.get('breakAroma')),
			cleanCup: Number(data.get('cleanCup')),
			cleanCupProfiles: (data.getAll('cleanCupProfiles')) as string[],
			sweet: Number(data.get('sweet')),
			sweetnessProfiles: (data.getAll('sweetnessProfiles')) as string[],
			acidity: Number(data.get('acidity')),
			acidityProfiles: (data.getAll('acidityProfiles')) as string[],
			mouthfeel: Number(data.get('mouthfeel')),
			mouthfeelProfiles: (data.getAll('mouthfeelProfiles')) as string[],
			flavor: Number(data.get('flavor')),
			flavorProfiles: (data.getAll('flavorProfiles')) as string[],
			aftertaste: Number(data.get('aftertaste')),
			aftertasteProfiles: (data.getAll('aftertasteProfiles')) as string[],
			balance: Number(data.get('balance')),
			balanceProfiles: (data.getAll('balanceProfiles')) as string[],
			overall: Number(data.get('overall')),
			overallProfiles: (data.getAll('overallProfiles')) as string[],
		}

		// 新しいオブジェクトを作成し、prisma.coeFormData.create() に渡す
		const createdFormData = await prisma.coeFormData.create({
			data: formData,
		})
		revalidatePath('/ja/cupping')
		redirectRequested = true // リダイレクトする場合はtrue

		console.log('Created CoeFormData:', createdFormData)
	} catch (error) {
		console.error('Error creating CoeFormData:', error)
		throw error
	}
	if (redirectRequested) {
		redirect('/ja/') // redirect関数をtry catch文の外で実行する
	}
}
