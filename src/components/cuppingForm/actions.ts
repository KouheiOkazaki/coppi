'use server'

import { CoeFormData } from '@/src/commons/types/type'

export async function postFormAction(data: CoeFormData) {
  await console.log('coeFormData.Action', data)
}
