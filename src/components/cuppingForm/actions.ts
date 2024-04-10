'use server'

import { CoeFormData } from '@/src/commons/types/type';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function postFormAction(data: FormData) {
  try {
    const formData: CoeFormData = {
      // FormData から必要なプロパティを抽出する
      sampleNo: data.get('sampleNo') as string,
      cleanCup: Number(data.get('cleanCup')),
      sweet: Number(data.get('sweet')),
      acidity: Number(data.get('acidity')),
      mouthfeel: Number(data.get('mouthfeel')),
      flavor: Number(data.get('flavor')),
    };

    // 新しいオブジェクトを作成し、prisma.coeFormData.create() に渡す
    const createdFormData = await prisma.coeFormData.create({
      data: formData,
    });
    revalidatePath('/ja/')

    console.log('Created CoeFormData:', createdFormData);
  } catch (error) {
    console.error('Error creating CoeFormData:', error);
    throw error;
  }
}