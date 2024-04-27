'use server'

import { CoeFormData } from '@/src/commons/types/type'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function postFormAction(data: FormData) {
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
			sweet: Number(data.get('sweet')),
			acidity: Number(data.get('acidity')),
			mouthfeel: Number(data.get('mouthfeel')),
			flavor: Number(data.get('flavor')),
			aftertaste: Number(data.get('aftertaste')),
			balance: Number(data.get('balance')),
			overall: Number(data.get('overall')),
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
